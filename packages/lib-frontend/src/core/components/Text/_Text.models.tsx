import { type TextCasingModel } from '#lib-frontend/core/components/Text/Text.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';

export type _TextPropsModel = {
  casing?: TextCasingModel;
  isEllipsis?: boolean;
  onPress?(): void;
} & ChildrenPropsModel<string>;
