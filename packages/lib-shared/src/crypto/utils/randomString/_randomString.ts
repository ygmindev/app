import { type _RandomStringModel } from '@lib/shared/crypto/utils/randomString/_randomString.models';
import { randomBytes } from 'crypto';

export const _randomString: _RandomStringModel = (length) =>
  randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
