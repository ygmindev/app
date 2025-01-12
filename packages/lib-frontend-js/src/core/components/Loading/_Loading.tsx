import { type _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
// import ClockLoader from 'react-spinners/ClockLoader';
import { type LoaderSizeMarginProps } from 'react-spinners/helpers/props';
import PulseLoader from 'react-spinners/PulseLoader';

const Compoent = PulseLoader;

const LoaderF = (Compoent as unknown as { default: typeof Compoent }).default ?? Compoent;

export const _Loading = composeComponent<_LoadingPropsModel, LoaderSizeMarginProps>({
  Component: LoaderF,

  getProps: ({ color, size }) => ({ color, loading: true, size: size - 7 }),

  isWeb: true,
});
