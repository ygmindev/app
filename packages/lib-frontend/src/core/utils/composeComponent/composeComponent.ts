import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { ForwardRefExoticComponent, ReactElement, RefObject } from 'react';
import { createElement, forwardRef } from 'react';
import { unstable_createElement } from 'react-native-web';

export const composeComponent = <TParams, TResult, TRef = unknown>({
  Component,
  getProps,
  isWeb,
  stylers,
}: ComposeComponentParamsModel<TParams, TResult, TRef>): ForwardRefExoticComponent<
  TParams & WithTestIdModel
> =>
  forwardRef<RefObject<TRef>, WithStyleParamsModel & TParams & { nativeID?: string }>(
    (props, ref): ReactElement<TResult> => {
      const { styles: componentStyles } = useStyles<TParams>({ props, stylers });
      const componentProps = getProps ? getProps(props, ref) : (props as unknown as TResult);
      const create = isWeb ? unstable_createElement : createElement;
      return create(Component, {
        ...componentProps,
        nativeid: props.nativeID,
        ref,
        style: componentStyles,
      });
    },
  ) as ForwardRefExoticComponent<TParams & WithTestIdModel>;
