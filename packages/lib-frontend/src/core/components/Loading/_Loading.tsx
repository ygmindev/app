import type { _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Flow } from 'react-native-animated-spinkit';
import type { SpinnerProps } from 'react-native-animated-spinkit/lib/typescript/SpinnerProps';

export const _Loading = composeComponent<_LoadingPropsModel, SpinnerProps>({
  getComponent: Flow,
  getProps: ({ color, size, testID }) => ({
    animating: true,
    color,
    hidesWhenStopped: true,
    size,
    testID,
  }),
});
