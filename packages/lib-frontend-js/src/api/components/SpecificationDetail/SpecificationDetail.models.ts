import { type SpecificationModel } from '@lib/shared/api/utils/Specification/Specification.models';

export type SpecificationDetailPropsModel<TType> = {
  specification: SpecificationModel<TType>;
};
