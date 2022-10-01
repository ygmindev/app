import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';

export interface AsyncWrapperPropsModel extends WrapperPropsModel {
  error?: Error | null;
  isLoading?: boolean;
  isTransparent?: boolean;
}
