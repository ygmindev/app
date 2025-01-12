import { type _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
// import ClockLoader from 'react-spinners/ClockLoader';
import { type LoaderSizeMarginProps } from 'react-spinners/helpers/props';
import SyncLoader from 'react-spinners/SyncLoader';

const Compoent = SyncLoader;

const LoaderF = (Compoent as unknown as { default: typeof Compoent }).default ?? Compoent;

export const _Loading = composeComponent<_LoadingPropsModel, LoaderSizeMarginProps>({
  Component: LoaderF,

  getProps: ({ color, size }) => ({ color, loading: true, size: size - 5 }),

  isWeb: true,
});
