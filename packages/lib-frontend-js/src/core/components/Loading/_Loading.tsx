import { type LoaderSizeMarginProps } from 'react-spinners/helpers/props';
import PulseLoader from 'react-spinners/PulseLoader';

import { type _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

const PulseLoaderF =
  (PulseLoader as unknown as { default: typeof PulseLoader }).default ?? PulseLoader;

export const _Loading = composeComponent<_LoadingPropsModel, LoaderSizeMarginProps>({
  Component: PulseLoaderF,

  getProps: ({ color, size }) => ({ color, loading: true, size: size - 7 }),

  isWeb: true,
});
