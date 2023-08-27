import { type ElementStatePropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type FocusableWrapperPropsModel = ElementStatePropsModel & {
  error?: TranslatableTextModel | boolean;
};

export type FocusableRefModel = {
  blur(): void;
  focus(): void;
};
