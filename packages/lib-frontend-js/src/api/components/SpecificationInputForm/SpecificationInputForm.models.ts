import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { type SpecificationModel } from '@lib/shared/api/utils/Specification/Specification.models';

export type SpecificationInputFormPropsModel<TType extends unknown> = WrapperPropsModel & {
  specification: SpecificationModel<TType>;
  validators?: FormValidatorsModel<TType>;
};
