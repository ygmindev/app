import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type ReactElement } from 'react';

export type NavigationHeaderPropsModel = {
  onBack?(): Promise<void>;
  title?: TranslatableTextModel | ReactElement;
};
