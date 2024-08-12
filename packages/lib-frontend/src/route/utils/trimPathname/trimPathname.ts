import { slug } from '@lib/shared/core/utils/slug/slug';
import trim from 'lodash/trim';

export const trimPathname = (value: string): string => {
  const pathname = value
    .split('/')
    .filter(Boolean)
    .map((char) => trim(char, '/').replace(/\w\S*/g, slug))
    .join('/');
  return `/${trim(pathname, '/')}`;
};
