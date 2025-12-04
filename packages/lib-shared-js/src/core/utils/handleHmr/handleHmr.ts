import { _handleHmr } from '@lib/shared/core/utils/handleHmr/_handleHmr';
import {
  type HandleHmrModel,
  type HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/handleHmr.models';

export const handleHmr = async ({
  onInitialize,
  ...params
}: HandleHmrParamsModel): Promise<HandleHmrModel> => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    return _handleHmr({ ...params, onInitialize });
  }
  return onInitialize?.();
};
