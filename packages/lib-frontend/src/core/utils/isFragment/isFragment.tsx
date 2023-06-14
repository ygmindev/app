import type { ExoticComponent, ReactElement } from 'react';
import { Fragment, isValidElement } from 'react';

import type {
  IsFragmentModel,
  IsFragmentParamsModel,
} from '#lib-frontend/core/utils/isFragment/isFragment.models';

export const isFragment = <TProps,>(value: IsFragmentParamsModel<TProps>): IsFragmentModel =>
  (isValidElement(value) && (value as ReactElement).type === Fragment) ||
  (value as unknown as ExoticComponent) === Fragment;
