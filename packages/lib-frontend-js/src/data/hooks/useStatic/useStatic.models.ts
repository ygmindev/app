export type UseStaticParamsModel<TType> = {
  src: string;
  query?(): Promise<TType>;
};

export type UseStaticModel<TType> = TType | null | undefined;
