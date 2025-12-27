import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type OptionModel = WithIdModel & {
  label?: string;
};
