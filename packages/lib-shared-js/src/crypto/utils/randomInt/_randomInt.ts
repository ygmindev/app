import {
  type _RandomIntModel,
  type _RandomIntParamsModel,
} from '@lib/shared/crypto/utils/randomInt/_randomInt.models';
import { randomInt } from 'crypto';

export const _randomInt = (...[min, max]: _RandomIntParamsModel): _RandomIntModel =>
  randomInt(min, max);
