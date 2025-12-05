'use client';

import { SharedConfig } from '@/lib/types';

interface AboutSectionProps {
  config: SharedConfig;
}

export default function AboutSection({ config }: AboutSectionProps) {
  const { hospital, facilities } = config;

  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <input
          type="radio"
          name="about-tab"
          id="tab-intro"
          className="tab-radio"
          defaultChecked
        />
        <input type="radio" name="about-tab" id="tab-facilities" className="tab-radio" />
        <input type="radio" name="about-tab" id="tab-location" className="tab-radio" />

        <div className="about-content">
          <div className="about-tabs">
            <label htmlFor="tab-intro" className="about-tab">
              Intro
            </label>
            <label htmlFor="tab-facilities" className="about-tab">
              Facilities
            </label>
            <label htmlFor="tab-location" className="about-tab">
              Location
            </label>
          </div>

          <div id="intro" className="tab-content-item">
            <h2>{facilities.intro}</h2>
            <p>
              {hospital.name} is a modern private hospital located in Rotherham, South
              Yorkshire. The hospital is equipped with latest equipment and our operating
              theatres have been designed to keep you safe and free from infection,
              providing the safest environment possible for surgical procedures.
            </p>
            <p><strong>Our private hospital is home to:</strong></p>
            <ul>
              {facilities.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a
              href="https://kinvarahospital.co.uk/about-us/"
              target="_blank"
              className="link-arrow"
              style={{ marginTop: '15px', display: 'inline-block' }}
            >
              Learn More About {hospital.name} <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div id="facilities" className="tab-content-item">
            <h2>Modern Facilities</h2>
            <p>
              We pride ourselves on offering hotel-quality accommodation to ensure your
              stay is as comfortable and effective as possible.
            </p>
          </div>

          <div id="location" className="tab-content-item">
            <h2>Our Location</h2>
            <p>
              Conveniently located in South Yorkshire and easily accessible by road or
              rail. Postcode {hospital.postcode}.
            </p>
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                marginTop: '20px'
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.984697218554!2d-1.3464!3d53.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879764000000001%3A0x0!2sKinvara%20Private%20Hospital!5e0!3m2!1sen!2suk!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="about-img-wrapper">
          <img
            src="/images/About intro image - 1200x800/Kinvara Private Hospital reception.jpg"
            alt="Hospital Building"
            id="default-about-img"
            width={1200}
            height={800}
          />

          <div className="facilities-photo-grid" id="facilities-grid">
            {facilities.images.map((image, index) => (
              <a
                key={index}
                href={image.path}
                className="facility-photo glightbox"
                data-gallery="facilities"
                data-description={image.description}
              >
                <img
                  src={image.path}
                  alt={image.description}
                  width={1200}
                  height={800}
                  loading="eager"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
