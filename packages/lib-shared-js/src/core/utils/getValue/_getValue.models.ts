export type _GetValueParamsModel<
  TType,
  TPath extends string,
  TDefault = _GetValueModel<TType, TPath>,
> = [data: TType, path: TPath, defaultValue?: TDefault];

type GetIndexedField<TType, TPath extends string> = TPath extends keyof TType
  ? TType[TPath]
  : TPath extends `${number}`
    ? '0' extends keyof TType
      ? undefined
      : number extends keyof TType
        ? TType[number]
        : undefined
    : undefined;

type FieldWithPossiblyUndefined<TType, TPath extends string> =
  | _GetValueModel<Exclude<TType, undefined>, TPath>
  | Extract<TType, undefined>;

type IndexedFieldWithPossiblyUndefined<TType, TPath extends string> =
  | GetIndexedField<Exclude<TType, undefined>, TPath>
  | Extract<TType, undefined>;

export type _GetValueModel<
  TType,
  TPath extends string,
> = TPath extends `${infer TLeft}.${infer TRight}`
  ? TLeft extends keyof TType
    ? FieldWithPossiblyUndefined<TType[TLeft], TRight>
    : TLeft extends `${infer TField}[${infer TIndex}]`
      ? TField extends keyof TType
        ? FieldWithPossiblyUndefined<
            IndexedFieldWithPossiblyUndefined<TType[TField], TIndex>,
            TRight
          >
        : undefined
      : undefined
  : TPath extends keyof TType
    ? TType[TPath]
    : TPath extends `${infer TField}[${infer TIndex}]`
      ? TField extends keyof TType
        ? IndexedFieldWithPossiblyUndefined<TType[TField], TIndex>
        : undefined
      : TType extends object
        ? undefined
        : TType;
