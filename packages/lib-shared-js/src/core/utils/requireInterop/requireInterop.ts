import {
  type RequireInteropModel,
  type RequireInteropParamsModel,
} from '@lib/shared/core/utils/requireInterop/requireInterop.models';
import { createRequire } from 'module';

const _require: NodeRequire =
  typeof require !== 'undefined'
    ? require
    : createRequire(typeof __filename !== 'undefined' ? __filename : process.cwd());

export const requireInterop = <TType extends unknown>(
  params: RequireInteropParamsModel,
): RequireInteropModel<TType> => {
  const result = _require(params) as unknown;
  return (result as { default: TType }).default ?? (result as TType);
};
