import { randomInt } from 'crypto';

import {
  type _RandomIntModel,
  type _RandomIntParamsModel,
} from '@lib-shared/crypto/utils/randomInt/_randomInt.models';

export const _randomInt = (...[min, max]: _RandomIntParamsModel): _RandomIntModel =>
  randomInt(min, max);
