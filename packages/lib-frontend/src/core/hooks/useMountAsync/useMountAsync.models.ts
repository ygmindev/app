import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface UseMountAsyncParamsModel<TResult> {
  onMount?: CallablePromiseModel<TResult | null>;
  onSuccess?(result: TResult): void;
}
