import {
  type ImportInteropModel,
  type ImportInteropParamsModel,
} from '@lib/shared/core/utils/importInterop/importInterop.models';

export const importInterop = async <TType extends unknown>(
  params: ImportInteropParamsModel,
): Promise<ImportInteropModel<TType>> => {
  const result = (await import(params)) as unknown;
  return (result as { default: TType }).default ?? (result as TType);
};
