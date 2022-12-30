import type {
  _RenderHookModel,
  _RenderHookParamsModel,
} from '@lib/frontend/test/utils/renderHook/_renderHook.models';

export type RenderParamsHookModel<TResult> = _RenderHookParamsModel<TResult>;

export interface RenderHookModel<TResult> extends _RenderHookModel<TResult> {}
