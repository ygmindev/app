import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import type {
  UseDividersModel,
  UseDividersParamsModel,
} from '@lib/frontend/core/hooks/useDividers/useDividers.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { Children, Fragment, useMemo } from 'react';

export const useDividers = (params: UseDividersParamsModel): UseDividersModel =>
  useMemo(
    () =>
      Children.map(params, (child, i) => {
        const key = child.key || uid();
        return i === params.length - 1 ? (
          child
        ) : (
          <Fragment key={key}>
            {child}

            <Divider key={`divider-${key}`} />
          </Fragment>
        );
      }),
    [params],
  );
