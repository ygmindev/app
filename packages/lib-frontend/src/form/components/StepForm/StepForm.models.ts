import type { SubmittablePropsModel } from '@lib/frontend/form/form.models';
import type { CallableModel, MergeArrayModel, PartialModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface FormStepPropsModel<TType, TStep = PartialModel<TType>, TResult = void>
  extends SubmittablePropsModel<TStep, TResult> {
  data?: TStep;
  onBack?: CallableModel;
}

export interface StepFormPropsModel<
  TType extends MergeArrayModel<TSteps>,
  TSteps extends Array<unknown>,
> extends SubmittablePropsModel<TType> {
  children: Array<ReactElement<FormStepPropsModel<TType, TSteps[number]>>>;
}
