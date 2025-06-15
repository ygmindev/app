import { _handleHmr } from '@lib/shared/core/utils/handleHmr/_handleHmr';
import {
  type HandleHmrModel,
  type HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/handleHmr.models';
import { isLocalDevelopment } from '@lib/shared/environment/utils/isLocalDevelopment/isLocalDevelopment';

export const handleHmr = ({ ...params }: HandleHmrParamsModel): HandleHmrModel => {
  isLocalDevelopment && _handleHmr({ ...params });
};
