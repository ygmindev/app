import { randomInt } from 'crypto';

import {
  type _RandomIntModel,
  type _RandomIntParamsModel,
} from '#lib-shared/crypto/utils/randomInt/_randomInt.models';

export const _randomInt = (length: _RandomIntParamsModel): _RandomIntModel =>
  randomInt(10 ** (length - 1), 10 ** length - 1);
