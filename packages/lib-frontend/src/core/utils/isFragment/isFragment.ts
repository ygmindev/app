// import type {
//   IsFragmentModel,
//   IsFragmentParamsModel,
// } from '@lib/frontend/core/utils/isFragment/isFragment.models';
// import type { ExoticComponent, ReactElement } from 'react';
// import { Fragment, isValidElement } from 'react';

// export const isFragment = (value: IsFragmentParamsModel): IsFragmentModel =>
//   isValidElement(value) &&
//   ((value as ReactElement).type === Fragment || (value as unknown as ExoticComponent) === Fragment);

import type {
  IsFragmentModel,
  IsFragmentParamsModel,
} from '@lib/frontend/core/utils/isFragment/isFragment.models';
import type { ExoticComponent, ReactElement } from 'react';
import { Fragment, isValidElement } from 'react';

export const isFragment = (value: IsFragmentParamsModel): IsFragmentModel => {
  console.warn(value);
  console.warn((value as ReactElement).type);
  console.warn((value as unknown as ExoticComponent) === Fragment);
  console.warn('\n\n');
  return (
    isValidElement(value) &&
    ((value as ReactElement).type === Fragment ||
      (value as unknown as ExoticComponent) === Fragment)
  );
};
