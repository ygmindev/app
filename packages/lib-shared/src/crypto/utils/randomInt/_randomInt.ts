import { randomInt } from 'crypto';

import type { _RandomIntModel } from '#lib-shared/crypto/utils/randomInt/_randomInt.models';

export const _randomInt: _RandomIntModel = (length) =>
  randomInt(10 ** (length - 1), 10 ** length - 1);
