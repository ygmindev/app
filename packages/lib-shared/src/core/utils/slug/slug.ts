import { type SlugModel, type SlugParamsModel } from '@lib/shared/core/utils/slug/slug.models';

export const slug = (params: SlugParamsModel): SlugModel =>
  params
    .normalize('NFKD')
    .replace(/(.+)([A-Z])/g, '$1-$2')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^(\w|?)-]+/g, '')
    .replace(/_/g, '-')
    .replace(/--+/g, '-')
    .replace(/-$/g, '');
