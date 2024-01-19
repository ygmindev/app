import { _phoneFormat } from '@lib/shared/locale/utils/phoneFormat/_phoneFormat';
import {
  type PhoneFormatModel,
  type PhoneFormatParamsModel,
} from '@lib/shared/locale/utils/phoneFormat/phoneFormat.models';

export const phoneFormat = (params: PhoneFormatParamsModel): PhoneFormatModel =>
  _phoneFormat(params);
