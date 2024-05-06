export type _RenderHookParamsModel<TType> = () => TType;

export type _RenderHookModel<TType> = {
  result: { current: TType };
  unmount(): void;
};
