import { type ReactElement } from 'react';

import { type WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type SlidesPropsModel = {
  current?: number;
  previous?: number;
  slides?: Array<{ element: ReactElement } & WithIdModel>;
};
