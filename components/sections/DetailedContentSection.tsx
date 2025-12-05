import { ContentSection } from '@/lib/types';

interface DetailedContentSectionProps {
  sections: ContentSection[];
}

export default function DetailedContentSection({ sections }: DetailedContentSectionProps) {
  return (
    <section className="detailed-content-section">
      <div className="container detailed-content">
        {sections.map((section, index) => (
          <div key={index}>
            <h2>{section.heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        ))}
      </div>
    </section>
  );
}
