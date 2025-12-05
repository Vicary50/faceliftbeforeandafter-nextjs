import { VideoConfig } from '@/lib/types';

interface VideoSectionProps {
  config: VideoConfig;
}

export default function VideoSection({ config }: VideoSectionProps) {
  const { youtubeId, heading, description, customThumbnail } = config;
  const thumbnailUrl = customThumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <section className="video-section">
      <div className="container video-grid">
        <div className="video-wrapper order-mobile-1">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="video-thumbnail"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            aria-label={`Watch ${heading} on YouTube`}
          >
            <div className="play-button"></div>
          </a>
        </div>
        <div className="video-text order-mobile-2">
          <h2>{heading}</h2>
          <p>{description}</p>
          <a
            href="https://www.youtube.com/@TheKarriClinic"
            target="_blank"
            className="link-arrow"
          >
            Watch more videos from our surgeons <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
