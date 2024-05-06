import { type ReactElement } from 'react';

import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type NillableArrayModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type ItemTablePropsModel = ElementStatePropsModel & {
  items: NillableArrayModel<
    WithIdModel &
      WithIconPropsModel & {
        description?: ReactElement | string;
        image?: string;
        title?: string;
      }
  >;
};
