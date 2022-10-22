import type { CallableModel } from '@lib/shared/core/core.models';

export interface WithSubmitPropsModel<TType = void, TResult = void> {
  isLoading?: boolean;
  onCancel?: CallableModel;
  onSubmit?(data: TType): Promise<TResult>;
  onSuccess?(data: TType, result: TResult): Promise<void>;
}
