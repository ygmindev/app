import type {
  ToRelativeModel,
  ToRelativeParamsModel,
} from '@lib/backend/file/utils/toRelative/toRelative.models';
import { relative } from 'path';

export const toRelative = ({ from, to }: ToRelativeParamsModel): ToRelativeModel =>
  relative(from, to);
