import { type ReactElement } from 'react';

import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type NillableArrayModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ItemTablePropsModel = {
  items: NillableArrayModel<
    WithIdModel &
      Pick<IconPropsModel, 'icon'> & {
        description?: ReactElement | string;
        image?: string;
        title?: string;
      }
  >;
};
