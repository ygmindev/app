import { Random } from 'random-js';

import {
  type _RandomIntModel,
  type _RandomIntParamsModel,
} from '@lib-shared/crypto/utils/randomInt/_randomInt.models';

export const _randomInt = (...[min, max]: _RandomIntParamsModel): _RandomIntModel =>
  new Random().integer(min, max);
