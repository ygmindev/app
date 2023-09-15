import { type ReactElement } from 'react';

import { type UseFormParamsModel } from '#lib-frontend/data/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type StepFormTwoPropsModel<TType = undefined, TResult = void> = UseFormParamsModel<
  TType,
  TResult
> & {
  isProgressVisible?: boolean;
  steps: Array<FormStepModel<TType>>;
  topElement?: ReactElement;
};

export type FormStepModel<TType = undefined> = WithIdModel & {
  //   element: ReactElement<FormStepPropsModel<TType>>;
  element: ReactElement;
  title: TranslatableTextModel;
};
