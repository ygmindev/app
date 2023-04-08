import type {
  InterleaveModel,
  InterleaveParamsModel,
} from '@lib/shared/core/utils/interleave/interleave.models';

export const interleave = <TType>({
  element,
  values = [],
}: InterleaveParamsModel<TType>): InterleaveModel<TType> =>
  values.flatMap((x) => [x, element]).slice(0, -1);
