import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type AsyncBoundaryContextModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type RefPropsModel } from '@lib/frontend/core/core.models';
import {
  type FormContainerPropsModel,
  type FormContainerRefModel,
} from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type UseFormParamsModel } from '@lib/frontend/data/hooks/useForm/useForm.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type StepFormPropsModel<TType, TResult = void> = UseFormParamsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    isProgress?: boolean;
    steps: Array<FormStepModel<TType, Partial<TType>>>;
    topElement?: ReactElement | null;
  };

export type FormStepPropsModel<
  TType,
  TStep extends Partial<TType>,
  TResult = void,
> = FormContainerPropsModel<TStep, TResult> & {
  data?: Partial<TType>;
  onBack?(): Promise<void>;
};

export type FormStepModel<TType, TStep extends Partial<TType>, TResult = void> = WithIdModel &
  Pick<FormContainerPropsModel<TStep, TResult>, 'fields' | 'validators'> & {
    element?: ReactElement<
      FormStepPropsModel<TType, TStep, TResult> &
        RefPropsModel<FormContainerRefModel<Partial<TType>>>
    >;
    message?: AsyncTextModel;
    title: AsyncTextModel;
  };
