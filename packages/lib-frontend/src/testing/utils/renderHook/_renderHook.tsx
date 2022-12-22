import { Root } from '@lib/frontend/root/containers/Root/Root';
import type { _RenderHookModel } from '@lib/frontend/testing/utils/renderHook/_renderHook.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import { renderHook } from '@testing-library/react';

export const _renderHook = <TResult,>(hook: CallableModel<TResult>): _RenderHookModel<TResult> => {
  const { result, unmount } = renderHook(hook, {
    wrapper: ({ children, ...props }) => <Root {...props}>{children}</Root>,
  });
  return { result, unmount };
};
