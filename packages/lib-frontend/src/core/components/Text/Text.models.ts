import type { WithAnimationPropsModel } from '@lib/frontend/core/decorators/withAnimationProps/withAnimationProps.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { TextStylerParamsModel } from '@lib/frontend/styling/utils/styler/textStyler/textStyler.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface TextPropsModel
  extends TextStylerParamsModel,
    WithChildrenPropsModel<TranslationTextModel>,
    WithTestIdModel {
  animation?: WithAnimationPropsModel;
  onPress?: CallableModel;
}
