import { type AsyncTextModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type NavigationHeaderPropsModel = {
  onBack?(): Promise<void>;
  title?: AsyncTextModel | ReactElement;
};
