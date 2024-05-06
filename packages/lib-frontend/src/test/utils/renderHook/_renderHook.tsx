import { renderHook } from '@testing-library/react';

import { Root } from '@lib/frontend/root/containers/Root/Root.base';
import {
  type _RenderHookModel,
  type _RenderHookParamsModel,
} from '@lib/frontend/test/utils/renderHook/_renderHook.models';

export const _renderHook = <TResult,>(
  hook: _RenderHookParamsModel<TResult>,
): _RenderHookModel<TResult> => {
  const { result, unmount } = renderHook(hook, {
    wrapper: ({ children, ...props }) => <Root {...props}>{children}</Root>,
  });
  return { result, unmount };
};
