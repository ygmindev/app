import { _renderHook } from '#lib-frontend/test/utils/renderHook/_renderHook';
import type {
  RenderHookModel,
  RenderParamsHookModel,
} from '#lib-frontend/test/utils/renderHook/renderHook.models';

export const renderHook = <TResult,>(
  hook: RenderParamsHookModel<TResult>,
): RenderHookModel<TResult> => _renderHook(hook);
