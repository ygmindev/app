import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { SubmittablePropsModel } from '#lib-frontend/form/form.models';
import type { CallableModel, IntersectionModel, PartialModel } from '#lib-shared/core/core.models';
import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';

export interface FormStepPropsModel<TType, TStep = PartialModel<TType>, TResult = void>
  extends SubmittablePropsModel<TStep, TResult> {
  data?: TStep;
  onBack?: CallableModel;
}

export interface FormStepModel<TType, TStep = PartialModel<TType>> extends WithIdModel {
  element: ReactElement<FormStepPropsModel<TType, TStep>>;
}

export interface StepFormPropsModel<
  TType extends IntersectionModel<TSteps>,
  TSteps extends Array<unknown>,
> extends SubmittablePropsModel<TType>,
    ChildrenPropsModel {
  steps: Array<FormStepModel<TType, TSteps[number]>>;
}
