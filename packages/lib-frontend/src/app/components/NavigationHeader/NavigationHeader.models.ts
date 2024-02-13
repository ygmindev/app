import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export type NavigationHeaderPropsModel = {
  onBack?(): void;
  title?: TranslatableTextModel;
};
