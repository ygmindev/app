import {
  type CartesianStringModel,
  type CartesianStringParamsModel,
} from '@lib/shared/core/utils/cartesianString/cartesianString.models';

export const cartesianString = (...[x, y]: CartesianStringParamsModel): CartesianStringModel =>
  x.flatMap((a) => y.map((b) => `${a}${b}`));
