import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { slug } from '@lib/shared/core/utils/slug/slug';
import trim from 'lodash/trim';

export const trimPathname = (value: string): string => {
  const pathname = filterNil(value.split('/'))
    .map((char) => trim(char, '/').replace(/\w\S*/g, slug))
    .join('/');
  return `/${trim(pathname, '/')}`;
};
