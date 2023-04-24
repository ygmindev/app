import { _callingCode } from '@lib/frontend/locale/utils/callingCode/_callingCode';
import type {
  CallingCodeModel,
  CallingCodeParamsModel,
} from '@lib/frontend/locale/utils/callingCode/callingCode.models';

export const callingCode = (params: CallingCodeParamsModel): CallingCodeModel =>
  _callingCode(params);
