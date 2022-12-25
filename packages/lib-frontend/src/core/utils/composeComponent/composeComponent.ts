import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { ForwardRefExoticComponent, ReactElement, RefObject } from 'react';
import { createElement, forwardRef } from 'react';
import { unstable_createElement } from 'react-native-web';

export const composeComponent = <TProps, TResult, TRef = unknown>({
  getComponent,
  getProps,
  isWeb,
  stylers,
}: ComposeComponentParamsModel<TProps, TResult, TRef>): ForwardRefExoticComponent<
  TProps & WithTestIdModel
> =>
  forwardRef<RefObject<TRef>, TProps & WithStyleModel & { nativeID?: string }>(
    (props, ref): ReactElement<TResult> => {
      const { styles } = useStyles<TProps>({ props, stylers });
      const _props = getProps ? getProps(props, ref) : (props as unknown as TResult);
      return (isWeb ? unstable_createElement : createElement)(getComponent(props), {
        ..._props,
        nativeid: props.nativeID,
        ref,
        style: styles,
      });
    },
  ) as ForwardRefExoticComponent<TProps & WithTestIdModel>;
