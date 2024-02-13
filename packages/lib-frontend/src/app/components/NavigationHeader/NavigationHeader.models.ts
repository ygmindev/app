import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export type NavigationHeaderPropsModel = {
  onBack?(): Promise<void>;
  title?: TranslatableTextModel;
};
