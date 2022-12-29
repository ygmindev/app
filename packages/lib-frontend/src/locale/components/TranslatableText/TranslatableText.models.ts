import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export interface TranslatableTextPropsModel
  extends Omit<TextPropsModel, 'children'>,
    ChildrenPropsModel<TranslatableTextModel> {
  ns?: Array<string>;
}
