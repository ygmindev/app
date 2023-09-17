import { type LoaderSizeMarginProps } from 'react-spinners/helpers/props';
import PulseLoader from 'react-spinners/SyncLoader';

import { type _LoadingPropsModel } from '#lib-frontend/core/components/Loading/_Loading.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';

export const _Loading = composeComponent<_LoadingPropsModel, LoaderSizeMarginProps>({
  Component: PulseLoader,

  getProps: ({ color, size }) => ({ color, loading: true, size }),

  isWeb: true,
});
