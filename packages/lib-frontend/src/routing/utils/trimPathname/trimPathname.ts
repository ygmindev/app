import { kebabCase, trim } from 'lodash';

export const trimPathname = (value: string): string =>
  `/${value
    .split('/')
    .filter(Boolean)
    .map((char) => trim(char, '/').replace(/\w\S*/g, (value) => kebabCase(value)))
    .join('/')}`;
