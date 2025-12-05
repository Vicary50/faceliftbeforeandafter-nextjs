import { ProcedureConfig } from '../types';

/**
 * Get the active procedure configuration based on environment variable
 * This function is used at build time to determine which procedure config to load
 */
export function getProcedureConfig(): ProcedureConfig {
  const procedure = process.env.NEXT_PUBLIC_PROCEDURE || process.env.PROCEDURE || 'breast-reduction';

  try {
    // Dynamic import of procedure config
    const config = require(`../config/procedures/${procedure}`).default;
    return config;
  } catch (error) {
    console.error(`Failed to load config for procedure: ${procedure}`);
    console.error('Error:', error);
    throw new Error(
      `Configuration not found for procedure "${procedure}". ` +
      `Make sure the file exists at lib/config/procedures/${procedure}.ts`
    );
  }
}

/**
 * Get the procedure ID from environment
 */
export function getProcedureId(): string {
  return process.env.NEXT_PUBLIC_PROCEDURE || process.env.PROCEDURE || 'breast-reduction';
}

/**
 * Validate procedure config has all required fields
 */
export function validateProcedureConfig(config: ProcedureConfig): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Basic info validation
  if (!config.id) errors.push('Missing required field: id');
  if (!config.name) errors.push('Missing required field: name');
  if (!config.displayName) errors.push('Missing required field: displayName');

  // Hero validation
  if (!config.hero?.heading) errors.push('Missing required field: hero.heading');
  if (!config.hero?.subheading) errors.push('Missing required field: hero.subheading');
  if (!config.hero?.prices || config.hero.prices.length === 0) {
    errors.push('At least one price option required in hero.prices');
  }

  // Gallery validation
  if (!config.gallery?.heading) errors.push('Missing required field: gallery.heading');
  if (!config.gallery?.disclaimer) errors.push('Missing required field: gallery.disclaimer');
  if (!config.gallery?.images?.basePath) errors.push('Missing required field: gallery.images.basePath');

  // FAQ validation
  if (!config.faq || config.faq.length < 6) {
    errors.push('At least 6 FAQ items required');
  }

  // Video validation
  if (!config.video?.youtubeId) errors.push('Missing required field: video.youtubeId');

  // Forms validation
  if (!config.forms?.web3FormsKey) errors.push('Missing required field: forms.web3FormsKey');
  if (!config.forms?.subject) errors.push('Missing required field: forms.subject');

  // Metadata validation
  if (!config.metadata?.title) errors.push('Missing required field: metadata.title');
  if (!config.metadata?.description) errors.push('Missing required field: metadata.description');
  if (config.metadata?.description && config.metadata.description.length > 155) {
    errors.push('metadata.description must be 155 characters or less');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
