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
  forwardRef<RefObject<TRef>, WithStyleModel & TProps & { nativeID?: string }>(
    (props, ref): ReactElement<TResult> => {
      const { styles: componentStyles } = useStyles<TProps>({ props, stylers });
      const componentProps = getProps ? getProps(props, ref) : (props as unknown as TResult);
      const create = isWeb ? unstable_createElement : createElement;
      const _Component = getComponent(props);
      return create(_Component, {
        ...componentProps,
        nativeid: props.nativeID,
        ref,
        style: componentStyles,
      });
    },
  ) as ForwardRefExoticComponent<TProps & WithTestIdModel>;
