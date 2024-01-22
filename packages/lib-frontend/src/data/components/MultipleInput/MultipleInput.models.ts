import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type MultipleInputPropsModel<TType extends WithIdModel> = InputPropsModel<Array<TType>> & {
  element: ReactElement<InputPropsModel<TType>>;
};

export type MultipleInputRefModle<TType extends WithIdModel> = InputRefModel<Array<TType>>;
