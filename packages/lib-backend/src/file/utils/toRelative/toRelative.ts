import { relative } from 'path';

import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import type {
  ToRelativeModel,
  ToRelativeParamsModel,
} from '#lib-backend/file/utils/toRelative/toRelative.models';

export const toRelative = ({ from = fromWorking(), to }: ToRelativeParamsModel): ToRelativeModel =>
  relative(from, to);
