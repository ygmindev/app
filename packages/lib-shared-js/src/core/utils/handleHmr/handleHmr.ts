import { _handleHmr } from '@lib/shared/core/utils/handleHmr/_handleHmr';
import {
  type HandleHmrModel,
  type HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/handleHmr.models';

export const handleHmr = ({ ...params }: HandleHmrParamsModel): HandleHmrModel => {
  (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
    _handleHmr({ ...params });
};
