import { type ReactElement } from 'react';

import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type SubmittablePropsModel } from '#lib-frontend/form/form.models';
import {
  type CallableModel,
  type IntersectionModel,
  type PartialModel,
} from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type FormStepPropsModel<TType, TStep = PartialModel<TType>, TResult = void> = {
  data?: TStep;
  onBack?: CallableModel;
} & SubmittablePropsModel<TStep, TResult>;

export type FormStepModel<TType, TStep = PartialModel<TType>> = {
  element: ReactElement<FormStepPropsModel<TType, TStep>>;
} & WithIdModel;

export type StepFormPropsModel<
  TType extends IntersectionModel<TSteps>,
  TSteps extends Array<unknown>,
> = {
  steps: Array<FormStepModel<TType, TSteps[number]>>;
} & SubmittablePropsModel<TType> &
  ChildrenPropsModel;
