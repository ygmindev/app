import { _phoneParse } from '@lib/shared/locale/utils/phoneParse/_phoneParse';
import {
  type PhoneParseModel,
  type PhoneParseParamsModel,
} from '@lib/shared/locale/utils/phoneParse/phoneParse.models';

export const phoneParse = (params: PhoneParseParamsModel): PhoneParseModel => _phoneParse(params);
