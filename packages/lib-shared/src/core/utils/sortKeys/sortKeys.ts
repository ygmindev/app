import { keys, reduce } from 'lodash';

export const sortKeys = <TType extends Record<string, unknown>>(value: TType): TType =>
  reduce<string, TType>(
    keys(value).sort(),
    (result, key) => ({ ...result, [key]: value[key] }),
    {} as TType,
  );
