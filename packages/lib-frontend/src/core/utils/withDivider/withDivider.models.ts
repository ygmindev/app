import { type ReactElement } from 'react';

import { type DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { type NillableArrayModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type WithDividerParamsModel = [
  params: NillableArrayModel<WithIdModel & { element: ReactElement }>,
  props?: DividerPropsModel,
];

export type WithDividerModel = Array<ReactElement>;
