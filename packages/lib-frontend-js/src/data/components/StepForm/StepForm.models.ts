import { type AsyncBoundaryContextModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type UseFormParamsModel } from '@lib/frontend/data/hooks/useForm/useForm.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type StepFormPropsModel<TType, TResult = void> = UseFormParamsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
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
    message?: AsyncTextModel;
    title: AsyncTextModel;
  };
