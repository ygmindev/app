import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';

export type NavigationHeaderPropsModel = {
  isPortal?: boolean;
  title?: AsyncTextModel;
  onBack?(): Promise<void>;
};
