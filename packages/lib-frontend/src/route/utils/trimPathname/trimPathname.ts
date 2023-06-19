import trim from 'lodash/trim';

import { slug } from '#lib-frontend/route/utils/slug/slug';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const trimPathname = (value: string): string =>
  `/${filterNil(value.split('/'))
    .map((char) => trim(char, '/').replace(/\w\S*/g, slug))
    .join('/')}`;
