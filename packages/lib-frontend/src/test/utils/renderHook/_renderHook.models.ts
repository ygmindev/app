import type { CallableModel } from '#lib-shared/core/core.models';

export type _RenderHookParamsModel<TType> = CallableModel<TType>;

export type _RenderHookModel<TType> = {
  result: { current: TType };
  unmount: CallableModel;
};
