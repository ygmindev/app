import { type ReactElement } from 'react';

import { type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type StepFormPropsModel<TKey extends string, TType, TResult = void> = WithIdModel<TKey> &
  SubmittablePropsModel<TType, TResult> & {
    isProgressBar?: boolean;
    steps: Array<FormStepModel<TType>>;
    topElement?: ReactElement;
  };

export type FormStepPropsModel<TType, TResult = void> = SubmittablePropsModel<
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
