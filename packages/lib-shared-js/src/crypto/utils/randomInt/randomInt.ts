import { _randomInt } from '@lib/shared/crypto/utils/randomInt/_randomInt';
import {
  type RandomIntModel,
  type RandomIntParamsModel,
} from '@lib/shared/crypto/utils/randomInt/randomInt.models';

export const randomInt = (...params: RandomIntParamsModel): RandomIntModel =>
  params.length == 2
    ? _randomInt(params[0], params[1])
    : _randomInt(10 ** (params[0] - 1), 10 ** params[0] - 1);
