export type WithDirParamsModel<TType extends unknown> = [
  dirname: string | undefined,
  fn: () => Promise<TType>,
];

export type WithDirModel<TType extends unknown> = TType;
