import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';

export interface AppearPropsModel extends WrapperPropsModel {
  duration?: number;
  isLazy?: boolean;
  isScalable?: boolean;
  isVisible?: boolean;
}
