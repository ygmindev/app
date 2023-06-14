import { _progress } from '#tool-task/core/utils/progress/_progress';
import type {
  ProgressModel,
  ProgressParamsModel,
} from '#tool-task/core/utils/progress/progress.models';

export const progress = ({ ...params }: ProgressParamsModel): ProgressModel =>
  _progress({ ...params });
