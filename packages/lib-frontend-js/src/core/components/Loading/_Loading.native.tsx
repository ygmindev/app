import { Flow } from 'react-native-animated-spinkit';
import { type SpinnerProps } from 'react-native-animated-spinkit/lib/typescript/SpinnerProps';

import { type _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Loading = composeComponent<_LoadingPropsModel, SpinnerProps>({
  Component: Flow,

  getProps: ({ color, size }) => ({
    animating: true,
    color,
    hidesWhenStopped: false,
    size,
  }),
});
