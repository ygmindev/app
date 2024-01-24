import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type SpecificationDetailPropsModel<TType> = {
  specification: SpecificationModel<TType>;
};
