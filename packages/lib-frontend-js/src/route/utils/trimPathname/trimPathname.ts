import {
  type TrimPathnameModel,
  type TrimPathnameParamsModel,
} from '@lib/frontend/route/utils/trimPathname/trimPathname.models';
import { slug } from '@lib/shared/core/utils/slug/slug';
import trim from 'lodash/trim';

export const trimPathname = (
  ...[value, options = {}]: TrimPathnameParamsModel
): TrimPathnameModel => {
  if (value === '*') return value;
  const isPrefix = options?.isPrefix ?? true;
  const isSlug = options?.isSlug ?? true;
  const pathname = value
    .split('/')
    .filter(Boolean)
    .map((char) => {
      let v = trim(char, '/');
      isSlug && (v = v.replace(/\w\S*/g, slug));
      return v;
    })
    .join('/');
  const result = trim(pathname, '/');
  return isPrefix ? `/${result}` : result;
};
