export interface UseMountAsyncParamsModel<TResult> {
  onMount?(): Promise<TResult | null>;
  onSuccess?(result: TResult): void;
}
