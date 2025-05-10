import { _serializeCookie } from '@lib/backend/http/utils/serializeCookie/_serializeCookie';
import {
  type SerializeCookieModel,
  type SerializeCookieParamsModel,
} from '@lib/backend/http/utils/serializeCookie/serializeCookie.models';

export const serializeCookie = ({ ...params }: SerializeCookieParamsModel): SerializeCookieModel =>
  _serializeCookie({ ...params });
