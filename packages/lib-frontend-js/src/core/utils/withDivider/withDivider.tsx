import { cloneElement, Fragment } from 'react';

import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import {
  type WithDividerModel,
  type WithDividerParamsModel,
} from '@lib/frontend/core/utils/withDivider/withDivider.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const withDivider = (...[params, props]: WithDividerParamsModel): WithDividerModel =>
  filterNil(params).map(({ element, id }, i) => (
    <Fragment key={id}>
      {i > 0 && (
        <Divider
          {...props}
          key={`${id}-divider`}
        />
      )}

      {cloneElement(element, { key: `${id}-element` })}
    </Fragment>
  ));
