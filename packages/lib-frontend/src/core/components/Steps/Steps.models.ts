import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel, PartialModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface StepPropsModel<TSteps, TType = PartialModel<TSteps>, TResult = void>
  extends WithSubmitPropsModel<TType, TResult>,
    WithStyleParamsModel {
  onBack?: CallableModel;
  stepsData?: TType;
}

export interface StepsPropsModel<TType> extends WithStyleParamsModel, WithTestIdModel {
  children: Array<ReactElement<StepPropsModel<TType>>>;
}
