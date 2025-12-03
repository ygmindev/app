import { _handleHmr } from '@lib/shared/core/utils/handleHmr/_handleHmr';
import {
  type HandleHmrModel,
  type HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/handleHmr.models';

export const handleHmr = async ({ ...params }: HandleHmrParamsModel): Promise<HandleHmrModel> => {
  (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
    (await _handleHmr({ ...params }));
};
