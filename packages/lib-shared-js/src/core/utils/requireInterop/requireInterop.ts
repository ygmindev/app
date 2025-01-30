import {
  type RequireInteropModel,
  type RequireInteropParamsModel,
} from '@lib/shared/core/utils/requireInterop/requireInterop.models';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const requireInterop = <TType extends unknown>(
  params: RequireInteropParamsModel,
): RequireInteropModel<TType> => {
  const result = require(params) as unknown;
  return (result as { default: TType }).default ?? (result as TType);
};
