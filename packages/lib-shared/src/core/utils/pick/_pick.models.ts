export type _PickParamsModel<TType, TKey extends string> = [value: TType, key: Array<TKey>];

export type _PickModel<TType, TKey extends string> = {
  [TProperty in keyof TType as TProperty extends (
    TKey extends `${infer TElement}.${string}` ? TElement : TKey
  )
    ? TProperty
    : never]: TProperty extends TKey
    ? TType[TProperty]
    : _PickModel<
        TType[TProperty],
        TKey extends `${Exclude<TProperty, symbol>}.${infer TElement}` ? TElement : never
      >;
};
