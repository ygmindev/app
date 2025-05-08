import { _Cookies } from '@lib/backend/http/utils/Cookies/_Cookies';
import {
  type CookiesModel,
  type CookiesParamsModel,
} from '@lib/backend/http/utils/Cookies/Cookies.models';

export class Cookies extends _Cookies implements CookiesModel {
  constructor(params: CookiesParamsModel) {
    super(params);
  }
}
