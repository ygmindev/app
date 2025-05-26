import {
  type TrimPathnameModel,
  type TrimPathnameParamsModel,
} from '@lib/frontend/route/utils/trimPathname/trimPathname.models';
import { slug } from '@lib/shared/core/utils/slug/slug';
import trim from 'lodash/trim';

export const trimPathname = (
  ...[value, isSlug = true]: TrimPathnameParamsModel
): TrimPathnameModel => {
  const pathname = value
    .split('/')
    .filter(Boolean)
    .map((char) => {
      let v = trim(char, '/');
      isSlug && (v = v.replace(/\w\S*/g, slug));
      return v;
    })
    .join('/');
  return `/${trim(pathname, '/')}`;
};
