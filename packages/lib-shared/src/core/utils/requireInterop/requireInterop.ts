import {
  type RequireInteropModel,
  type RequireInteropParamsModel,
} from '#lib-shared/core/utils/requireInterop/requireInterop.models';

export const requireInterop = <TType>(
  params: RequireInteropParamsModel,
): RequireInteropModel<TType> => {
  const result = require(params) as unknown;
  return (result as { default: TType }).default ?? (result as TType);
};
