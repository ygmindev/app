import kebabCase from 'lodash/kebabCase';
import trim from 'lodash/trim';

export const trimPathname = (value: string): string =>
  `/${value
    .split('/')
    .filter(Boolean)
    .map((char) => trim(char, '/').replace(/\w\S*/g, (value) => kebabCase(value)))
    .join('/')}`;
