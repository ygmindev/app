import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export interface TranslatableTextPropsModel
  extends Omit<TextPropsModel, 'children'>,
    WithChildrenPropsModel<TranslatableTextModel> {
  ns?: Array<string>;
}
