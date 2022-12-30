import type { PropsModel } from '@lib/frontend/core/core.models';
import type {
  ComposeComponentModel,
  ComposeComponentParamsModel,
} from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { ReactElement, RefObject } from 'react';
import { createElement, forwardRef } from 'react';
import { unstable_createElement } from 'react-native-web';

export const composeComponent = <TProps, TResult, TRef = unknown>({
  getComponent,
  getProps,
  isWeb,
  stylers,
}: ComposeComponentParamsModel<TProps, TResult, TRef>): ComposeComponentModel<TProps> =>
  forwardRef<RefObject<TRef>, PropsModel<ComposeComponentModel<TProps>>>(
    (props, ref): ReactElement<TResult> => {
      const { styles } = useStyles({ props, stylers });
      const theme = useTheme();
      const _Component = getComponent(props);
      const _props = getProps
        ? getProps({ ...props, style: styles }, theme, ref)
        : (props as unknown as TResult);
      return (isWeb ? unstable_createElement : createElement)(_Component, {
        ..._props,
        nativeid: props.nativeID,
        ref,
        style: styles,
        testID: props.testID,
      });
    },
  ) as ComposeComponentModel<TProps>;
