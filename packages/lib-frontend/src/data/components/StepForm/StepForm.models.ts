import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type UseFormParamsModel } from '@lib/frontend/data/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type StepFormPropsModel<TType, TResult = void> = UseFormParamsModel<TType, TResult> & {
  isProgress?: boolean;
  steps: Array<FormStepModel<TType, PartialModel<TType>>>;
  topElement?: ReactElement | null;
};

export type FormStepPropsModel<
  TType,
  TStep extends PartialModel<TType>,
  TResult = void,
> = FormContainerPropsModel<TStep, TResult> & {
  data?: PartialModel<TType>;
  onBack?(): void;
};

export type FormStepModel<TType, TStep extends PartialModel<TType>, TResult = void> = WithIdModel &
  Pick<FormContainerPropsModel<TStep, TResult>, 'fields'> & {
    element?: ReactElement<FormStepPropsModel<TType, TStep, TResult>>;
    message?: TranslatableTextModel;
    title: TranslatableTextModel;
  };
