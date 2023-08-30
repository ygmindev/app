import { type ReactElement } from 'react';

import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type FieldGroupPropsModel = {
  fields: Array<WithIdModel & { element: ReactElement<FieldPropsModel<unknown>> }>;
  isVertical?: boolean;
};
