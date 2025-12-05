import type { Metadata } from "next";
import "./globals.css";
import { getProcedureConfig } from '@/lib/config';

// Generate dynamic metadata based on procedure
export async function generateMetadata(): Promise<Metadata> {
  const procedureConfig = getProcedureConfig();

  return {
    title: procedureConfig.metadata.title,
    description: procedureConfig.metadata.description,
    keywords: procedureConfig.metadata.keywords,
    openGraph: {
      title: procedureConfig.metadata.title,
      description: procedureConfig.metadata.description,
      type: 'website',
      siteName: 'Kinvara Private Hospital',
    },
    twitter: {
      card: 'summary_large_image',
      title: procedureConfig.metadata.title,
      description: procedureConfig.metadata.description,
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />

        {/* Fonts with font-display swap for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />

        {/* GLightbox CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
