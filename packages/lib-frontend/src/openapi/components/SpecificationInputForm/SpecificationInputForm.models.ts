import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type SpecificationInputFormPropsModel<TType extends unknown> = {
  specification: SpecificationModel<TType>;
};
