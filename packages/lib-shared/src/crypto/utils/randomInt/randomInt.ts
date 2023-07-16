import { _randomInt } from '#lib-shared/crypto/utils/randomInt/_randomInt';
import {
  type RandomIntModel,
  type RandomIntParamsModel,
} from '#lib-shared/crypto/utils/randomInt/randomInt.models';

export const randomInt = (params: RandomIntParamsModel): RandomIntModel => _randomInt(params);
