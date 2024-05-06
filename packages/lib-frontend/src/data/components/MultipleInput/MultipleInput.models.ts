import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type MultipleInputPropsModel<TType extends WithIdModel> = InputPropsModel<Array<TType>> & {
  displayElement(value: TType): ReactElement;
  element: ReactElement<FormContainerPropsModel<TType>>;
};

export type MultipleInputRefModle<TType extends WithIdModel> = InputRefModel<Array<TType>>;
