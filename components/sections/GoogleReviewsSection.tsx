interface GoogleReviewsSectionProps {
  elfsightAppId?: string;
}

export default function GoogleReviewsSection({
  elfsightAppId = '3df8f079-a7a1-4f0a-9ba4-d77225354ad9'
}: GoogleReviewsSectionProps) {
  return (
    <section className="google-slider-section">
      <div className="container">
        <div
          className={`elfsight-app-${elfsightAppId}`}
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
