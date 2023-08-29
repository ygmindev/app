import { type ReactElement } from 'react';

import { type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type StepFormPropsModel<TType, TResult = void> = SubmittablePropsModel<TType, TResult> & {
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
};
