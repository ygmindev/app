import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import {
  type ToRelativeModel,
  type ToRelativeParamsModel,
} from '@lib/backend/file/utils/toRelative/toRelative.models';
import { relative } from 'path';

export const toRelative = ({ from = fromWorking(), to }: ToRelativeParamsModel): ToRelativeModel =>
  relative(from, to);
