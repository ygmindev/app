import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type InputGroupPropsModel = {
  fields: Array<WithIdModel & { element: ReactElement<InputPropsModel<unknown>> }>;
  isVertical?: boolean;
};
