import type { StylePropsModel } from '@lib/frontend/core/core.models';
import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { CallableModel, MergeArrayModel, PartialModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface FormStepPropsModel<TType, TStep = PartialModel<TType>, TResult = void>
  extends WithSubmitPropsModel<TStep, TResult>,
    StylePropsModel {
  data?: TStep;
  onBack?: CallableModel;
}

export interface FormStepsPropsModel<
  TType extends MergeArrayModel<TSteps>,
  TSteps extends Array<unknown>,
> extends WithSubmitPropsModel<TType>,
    StylePropsModel,
    TestIdPropsModel {
  children: Array<ReactElement<FormStepPropsModel<TType, TSteps[number]>>>;
}
