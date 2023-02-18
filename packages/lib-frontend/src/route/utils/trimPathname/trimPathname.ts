import { slug } from '@lib/frontend/route/utils/slug/slug';
import trim from 'lodash/trim';

export const trimPathname = (value: string): string =>
  `/${value
    .split('/')
    .filter(Boolean)
    .map((char) => trim(char, '/').replace(/\w\S*/g, slug))
    .join('/')}`;
