import trim from 'lodash/trim';

import { slug } from '@lib/shared/core/utils/slug/slug';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const trimPathname = (value: string): string => {
  const pathname = filterNil(value.split('/'))
    .map((char) => trim(char, '/').replace(/\w\S*/g, slug))
    .join('/');
  return `/${trim(pathname, '/')}`;
};
