import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import type {
  _UseFormModel,
  _UseFormParamsModel,
} from '@lib/frontend/form/hooks/useForm/_useForm.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface FormFieldModel extends WithIdModel {}

export interface UseFormParamsModel<TType>
  extends Pick<_UseFormParamsModel<TType>, 'onSubmit' | 'initialValues'> {
  validators?: FormValidatorsModel<TType>;
}

export interface UseFormModel<TType> extends _UseFormModel<TType> {}
