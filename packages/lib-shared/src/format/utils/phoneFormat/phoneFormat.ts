import { _phoneFormat } from '@lib/shared/format/utils/phoneFormat/_phoneFormat';
import type {
  PhoneFormatModel,
  PhoneFormatParamsModel,
} from '@lib/shared/format/utils/phoneFormat/phoneFormat.models';

export const phoneFormat = (params: PhoneFormatParamsModel): PhoneFormatModel =>
  _phoneFormat(params);
