import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { TextStylerParamsModel } from '@lib/frontend/style/utils/styler/textStyler/textStyler.models';

export interface TextPropsModel
  extends Omit<_TextPropsModel, 'children'>,
    TextStylerParamsModel,
    WithChildrenPropsModel<TranslationTextModel> {
  animation?: AnimatablePropsModel;
}
