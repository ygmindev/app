import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel, MergeArrayModel, PartialModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface FormStepPropsModel<TType, TStep = PartialModel<TType>, TResult = void>
  extends WithSubmitPropsModel<TStep, TResult>,
    WithStyleModel {
  data?: TStep;
  onBack?: CallableModel;
}

export interface FormStepsPropsModel<
  TType extends MergeArrayModel<TSteps>,
  TSteps extends Array<unknown>,
> extends WithSubmitPropsModel<TType>,
    WithStyleModel,
    WithTestIdModel {
  children: Array<ReactElement<FormStepPropsModel<TType, TSteps[number]>>>;
}
