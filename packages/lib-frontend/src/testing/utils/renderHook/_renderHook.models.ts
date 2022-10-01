import type { CallableModel } from '@lib/shared/core/core.models';

export interface _RenderHookModel<TResult> {
  result: { current: TResult };
  unmount: CallableModel;
}
