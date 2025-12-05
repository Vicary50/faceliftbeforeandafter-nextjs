'use client';

import { ProcedureConfig } from '@/lib/types';
import { sharedConfig } from '@/lib/config/shared';
import { useMemo, useEffect } from 'react';

interface GallerySectionProps {
  config: ProcedureConfig;
}

// Patient grouped images structure
interface PatientImages {
  patientNumber: number;
  images: string[];
  description?: string;
}

export default function GallerySection({ config }: GallerySectionProps) {
  const { gallery } = config;
  const { heading, disclaimer, filters, images } = gallery;

  // Reinitialize GLightbox after component mounts and images load
  useEffect(() => {
    // Wait for images to load, then reinitialize GLightbox
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).GLightbox) {
        const existingLightbox = (window as any).lightboxInstance;
        if (existingLightbox && typeof existingLightbox.destroy === 'function') {
          existingLightbox.destroy();
        }

        const lightbox = (window as any).GLightbox({
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
          closeButton: true,
          keyboardNavigation: true,
          zoomable: true,
          draggable: true,
          skin: 'clean',
          closeOnClick: true // Close lightbox when clicking on image
        });

        (window as any).lightboxInstance = lightbox;
      }
    }, 2000); // Wait 2 seconds for images to load

    return () => clearTimeout(timer);
  }, []);

  // Generate patient groups at render time (memoized for performance)
  const patientGroups = useMemo<PatientImages[]>(() => {
    if (!images.byPatient || !images.patientPattern) {
      return [];
    }

    const groups: PatientImages[] = [];

    // For each patient, use specific images if defined, otherwise skip
    for (let i = 1; i <= images.count; i++) {
      const patientImages: string[] = [];
      const basePattern = images.patientPattern.replace('{patient}', i.toString());

      // Get specific view suffixes for this patient
      const viewSuffixes = images.patientImages?.[i] || [];

      // Build image paths only for views that exist
      viewSuffixes.forEach(suffix => {
        const imagePath = `${images.basePath}/${basePattern} ${suffix}.png`;
        patientImages.push(imagePath);
      });

      // Only add patient if they have images
      if (patientImages.length > 0) {
        groups.push({
          patientNumber: i,
          images: patientImages,
          description: images.patientDescriptions?.[i]
        });
      }
    }

    return groups;
  }, [images.byPatient, images.patientPattern, images.count, images.basePath, images.patientImages, images.patientDescriptions]);

  // Generate image URLs based on pattern
  const generateImageUrl = (num: number, category?: string): string => {
    if (filters?.enabled && category && images.byCategory) {
      const categoryConfig = images.byCategory[category];
      if (categoryConfig) {
        return `${images.basePath}/${categoryConfig.pattern.replace('{num}', num.toString())}?v=2`;
      }
    }

    if (images.pattern) {
      const fileName = images.pattern.replace('{num}', num <= 16 ? num.toString() : `photo ${num}`);
      return `${images.basePath}/${fileName}?v=2`;
    }

    return '';
  };

  // Render patient-grouped gallery
  const renderPatientGroupedGallery = () => {
    return patientGroups.map((patient) => (
      <div key={patient.patientNumber} className="patient-row">
        <div className="patient-header">
          <div className="patient-label">Patient {patient.patientNumber}</div>
          {patient.description && (
            <div className="patient-description">{patient.description}</div>
          )}
        </div>
        <div className="patient-images">
          {patient.images.map((imagePath, idx) => (
            <a
              key={`${patient.patientNumber}-${idx}`}
              href={imagePath}
              className="case-card glightbox"
              data-gallery="gallery"
            >
              <img
                src={imagePath}
                alt={`${config.displayName} Patient ${patient.patientNumber} View ${idx + 1}`}
                width={800}
                height={550}
                loading="eager"
              />
            </a>
          ))}
        </div>
      </div>
    ));
  };

  // Generate gallery items
  const renderGalleryItems = (category?: string) => {
    let count = images.count;
    if (filters?.enabled && category && images.byCategory) {
      count = images.byCategory[category].count;
    }

    return Array.from({ length: count }, (_, i) => i + 1).map((num) => (
      <a
        key={`${category || 'all'}-${num}`}
        href={generateImageUrl(num, category)}
        className="case-card glightbox"
        data-gallery="gallery"
        data-description={`${config.displayName} Case ${num}`}
      >
        <img
          src={generateImageUrl(num, category)}
          alt={`${config.displayName} Case ${num}`}
          width={800}
          height={550}
          loading="lazy"
        />
      </a>
    ));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>{heading}</h2>
          <p className="gallery-disclaimer">{disclaimer}</p>
        </div>

        {images.byPatient ? (
          // Patient-grouped gallery layout
          <div className="patient-gallery">
            {renderPatientGroupedGallery()}
          </div>
        ) : filters?.enabled ? (
          <>
            {/* CSS-only tabs for filtering */}
            {filters.categories.map((category, index) => (
              <input
                key={category}
                type="radio"
                name="gallery-filter"
                id={`filter-${category.toLowerCase().replace(/\s/g, '-')}`}
                className="tab-radio"
                defaultChecked={index === 0}
              />
            ))}

            <div className="gallery-filter-tabs">
              {filters.categories.map((category) => (
                <label
                  key={category}
                  htmlFor={`filter-${category.toLowerCase().replace(/\s/g, '-')}`}
                  className="filter-tab"
                >
                  {category}
                </label>
              ))}
            </div>

            {filters.categories.map((category) => (
              <div
                key={category}
                className="gallery-grid"
                id={`gallery-${category.toLowerCase().replace(/\s/g, '-')}`}
              >
                {renderGalleryItems(category)}
              </div>
            ))}
          </>
        ) : (
          <div className="gallery-grid">{renderGalleryItems()}</div>
        )}

        <div className="procedure-nav">
          <h3>View Other Before & After Photos</h3>
          <div className="procedure-pills">
            {sharedConfig.procedureLinks.map((procedure, idx) => (
              <a
                key={idx}
                href={procedure.url || '#'}
                className={`procedure-pill ${procedure.name === config.displayName ? 'active' : ''}`}
                {...(procedure.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={!procedure.url ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
              >
                {procedure.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
