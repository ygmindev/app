import { _getCallingCode } from '@lib/frontend/locale/utils/getCallingCode/_getCallingCode';
import type {
  GetCallingCodeModel,
  GetCallingCodeParamsModel,
} from '@lib/frontend/locale/utils/getCallingCode/getCallingCode.models';

export const getCallingCode = (params: GetCallingCodeParamsModel): GetCallingCodeModel =>
  _getCallingCode(params);
