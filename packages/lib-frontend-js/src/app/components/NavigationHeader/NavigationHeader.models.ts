import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type ReactElement } from 'react';

export type NavigationHeaderPropsModel = {
  isAbsolute?: boolean;
  onBack?(): Promise<void>;
  title?: AsyncTextModel | ReactElement;
};
