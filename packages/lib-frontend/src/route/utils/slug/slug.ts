import type { SlugModel, SlugParamsModel } from '@lib/frontend/route/utils/slug/slug.models';

export const slug = (params: SlugParamsModel): SlugModel =>
  params
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^(\w|?)-]+/g, '')
    .replace(/_/g, '-')
    .replace(/--+/g, '-')
    .replace(/-$/g, '');
