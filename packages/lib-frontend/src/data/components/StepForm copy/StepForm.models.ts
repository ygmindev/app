import { type ReactElement } from 'react';

import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type StepFormPropsModel<TKey extends string, TType, TResult = void> = WithIdModel<TKey> &
  SubmittablePropsModel<TType, TResult> & {
    initialValues?: PartialModel<TType>;
    steps: Array<FormStepModel<TType>>;
    topElement?: ReactElement;
  };

export type FormStepPropsModel<TType, TResult = void> = FormContainerPropsModel<
  PartialModel<TType>,
  TResult
> & {
  data?: PartialModel<TType>;
  onBack?(): void;
};

export type FormStepModel<TType> = WithIdModel & {
  element: ReactElement<FormStepPropsModel<TType>>;
  title: TranslatableTextModel;
};
