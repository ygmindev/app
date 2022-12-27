import type {
  ComposeComponentParamsModel,
  ComposeComponentPropsModel,
} from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { ForwardRefExoticComponent, ReactElement, RefObject } from 'react';
import { createElement, forwardRef } from 'react';
import { unstable_createElement } from 'react-native-web';

export const composeComponent = <TProps, TResult, TRef = unknown>({
  getComponent,
  getProps,
  isWeb,
  stylers,
}: ComposeComponentParamsModel<TProps, TResult, TRef>): ForwardRefExoticComponent<
  ComposeComponentPropsModel<TProps>
> =>
  forwardRef<RefObject<TRef>, ComposeComponentPropsModel<TProps>>(
    (props, ref): ReactElement<TResult> => {
      const { styles } = useStyles<TProps>({ props, stylers });
      const _props = getProps ? getProps(props, ref) : (props as unknown as TResult);
      return (isWeb ? unstable_createElement : createElement)(getComponent(props), {
        ..._props,
        nativeid: props.nativeID,
        ref,
        style: styles,
        testID: props.testID,
      });
    },
  ) as ForwardRefExoticComponent<ComposeComponentPropsModel<TProps>>;
