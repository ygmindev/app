import { type TablePropsModel } from '@lib/frontend/data/components/Table/Table.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type ReactElement } from 'react';

export type TableInputPropsModel<TType> = InputPropsModel<Array<TType>> & {
  element: ReactElement<TablePropsModel<TType>>;
};

export type TableInputRefModel<TType> = InputRefModel<Array<TType>>;
