import { type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type SpecificationInputFormPropsModel<TType extends unknown> = {
  specification: SpecificationModel<TType>;
  validators?: FormValidatorsModel<TType>;
};
