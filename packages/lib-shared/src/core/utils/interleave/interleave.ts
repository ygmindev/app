import type {
  InterleaveModel,
  InterleaveParamsModel,
} from '@lib/shared/core/utils/interleave/interleave.models';

export const interleave = <TType>(
  ...[value, element]: InterleaveParamsModel<TType>
): InterleaveModel<TType> => value.flatMap((x) => [x, element]).slice(0, -1);
