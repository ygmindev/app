import {
  type PermuteStringModel,
  type PermuteStringParamsModel,
} from '@lib/shared/core/utils/permuteString/permuteString.models';

export const permuteString = (...[x, y]: PermuteStringParamsModel): PermuteStringModel =>
  x.flatMap((a) => y.map((b) => `${a}${b}`));
