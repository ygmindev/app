import type { CallableModel } from '@lib/shared/core/core.models';

export interface WithSubmitPropsModel<TType = void, TResult = void, TError extends Error = Error> {
  isLoading?: boolean;
  onCancel?: CallableModel;
  onError?(data: TError): Promise<void>;
  onSubmit?(data: TType): Promise<TResult>;
  onSuccess?(result: TResult, data: TType): Promise<void>;
}
