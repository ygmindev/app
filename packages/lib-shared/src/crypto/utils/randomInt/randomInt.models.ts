import {
  type _RandomIntModel,
  type _RandomIntParamsModel,
} from '@lib/shared/crypto/utils/randomInt/_randomInt.models';

export type RandomIntParamsModel = _RandomIntParamsModel | [length: number];

export type RandomIntModel = _RandomIntModel;
