import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';

export interface SlidesPropsModel {
  current?: number;
  slides?: Array<{ element: ReactElement } & WithIdModel>;
}
