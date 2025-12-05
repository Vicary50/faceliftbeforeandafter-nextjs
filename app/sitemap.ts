import { MetadataRoute } from 'next';
import { getProcedureConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const procedureConfig = getProcedureConfig();
  const baseUrl = `https://${procedureConfig.domain}`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
