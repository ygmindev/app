import {
  type _RandomIntModel,
  type _RandomIntParamsModel,
} from '@lib/shared/crypto/utils/randomInt/_randomInt.models';
import { Random } from 'random-js';

export const _randomInt = (...[min, max]: _RandomIntParamsModel): _RandomIntModel =>
  new Random().integer(min, max);
