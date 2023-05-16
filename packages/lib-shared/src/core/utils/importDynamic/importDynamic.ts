import type {
  ImportDynamicModel,
  ImportDynamicParamsModel,
} from '@lib/shared/core/utils/importDynamic/importDynamic.models';

export const importDynamic = async <TType>(
  params: ImportDynamicParamsModel,
): ImportDynamicModel<TType> => {
  const _module = await import(params);
  return _module.default ?? _module;
};
