import type { CallableModel } from '@lib/shared/core/core.models';

export interface WithSubmitPropsModel<TType = void, TResult = void> {
  isLoading?: boolean;
  onCancel?: CallableModel;
  onSubmit?(data: TType): Promise<TResult>;
  onSuccess?(result: TResult, data: TType): Promise<void>;
}
