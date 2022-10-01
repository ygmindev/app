import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';

export interface WithSubmitPropsModel<TType = void, TResult = void, TError extends Error = Error> {
  isLoading?: boolean;
  onError?(data: TError): Promise<void>;
  onSubmit?(data: TType): Promise<TResult>;
  onSuccess?(result: TResult, data: TType): Promise<void>;
  submitLabel?: TranslationTextModel;
}
