import { _parsePhoneNumber } from '@lib/shared/locale/utils/parsePhoneNumber/_parsePhoneNumber';
import type {
  ParsePhoneNumberModel,
  ParsePhoneNumberParamsModel,
} from '@lib/shared/locale/utils/parsePhoneNumber/parsePhoneNumber.models';

export const parsePhoneNumber = (params: ParsePhoneNumberParamsModel): ParsePhoneNumberModel =>
  _parsePhoneNumber(params);
