import { type ReactElement } from 'react';

import { type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type IntersectionModel, type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type FormStepPropsModel<TType, TStep, TResult = void> = {
  data?: PartialModel<TType>;
  onBack?(): void;
} & SubmittablePropsModel<TStep, TResult>;

export type FormStepModel<TType, TStep> = {
  element: ReactElement<FormStepPropsModel<TType, TStep>>;
} & WithIdModel;

export type StepFormPropsModel<
  TType extends IntersectionModel<TSteps>,
  TSteps extends Array<unknown>,
> = SubmittablePropsModel<TType> & {
  steps: Array<FormStepModel<TType, TSteps[number]>>;
  topElement?: ReactElement;
};
