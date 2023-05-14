import { _synchronize } from '@lib/shared/core/utils/synchronize/_synchronize';
import type {
  SynchronizeModel,
  SynchronizeParamsModel,
} from '@lib/shared/core/utils/synchronize/synchronize.models';

export const synchronize = ({ ...params }: SynchronizeParamsModel): SynchronizeModel => _synchronize({ ...params });
