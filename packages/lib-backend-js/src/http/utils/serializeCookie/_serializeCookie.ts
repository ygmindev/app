import {
  type _SerializeCookieModel,
  type _SerializeCookieParamsModel,
} from '@lib/backend/http/utils/serializeCookie/_serializeCookie.models';
import { serialize, type SerializeOptions } from 'cookie';

export const _serializeCookie = (
  ...[key, value, options]: _SerializeCookieParamsModel
): _SerializeCookieModel =>
  serialize(key, value, {
    domain: options?.domain,
    expires: options?.expires,
    httpOnly: options?.isHttpOnly,
    maxAge: options?.maxAge,
    path: options?.path,
    sameSite: options?.sameSite?.toLowerCase() as SerializeOptions['sameSite'],
    secure: options?.isSecure,
  });
