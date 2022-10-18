import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel, PartialModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface FormStepPropsModel<TType, TStep = PartialModel<TType>, TResult = void>
  extends WithSubmitPropsModel<TStep, TResult>,
    WithStyleParamsModel {
  data?: TStep;
  onBack?: CallableModel;
}

export interface FormStepsPropsModel<TType> extends WithStyleParamsModel, WithTestIdModel {
  children: Array<ReactElement<FormStepPropsModel<TType>>>;
}
