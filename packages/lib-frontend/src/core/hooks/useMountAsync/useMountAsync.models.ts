import type { PromiseModel } from '@lib/shared/core/core.models';

export interface UseMountAsyncParamsModel<TResult> {
  onMount?: PromiseModel<TResult | null>;
  onSuccess?(result: TResult): void;
}
