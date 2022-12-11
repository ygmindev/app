import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel, MergeArrayModel, PartialModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface FormStepPropsModel<TType, TStep = PartialModel<TType>, TResult = void>
  extends WithSubmitPropsModel<TStep, TResult>,
    WithStyleParamsModel {
  data?: TStep;
  onBack?: CallableModel;
}

export interface FormStepsPropsModel<
  TType extends MergeArrayModel<TSteps>,
  TSteps extends Array<unknown>,
> extends WithSubmitPropsModel<TType>,
    WithStyleParamsModel,
    WithTestIdModel {
  children: Array<ReactElement<FormStepPropsModel<TType, TSteps[number]>>>;
}
