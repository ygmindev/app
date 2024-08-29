import {
  type IsFragmentModel,
  type IsFragmentParamsModel,
} from '@lib/frontend/core/utils/isFragment/isFragment.models';
import { type ExoticComponent, type ReactElement } from 'react';
import { Fragment, isValidElement } from 'react';

export const isFragment = <TProps,>(value: IsFragmentParamsModel<TProps>): IsFragmentModel =>
  (isValidElement(value) && (value as ReactElement).type === Fragment) ||
  (value as unknown as ExoticComponent) === Fragment;
