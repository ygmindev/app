import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { SpacingStylerParamsModel } from '@lib/frontend/styling/utils/styler/spacingStyler/spacingStyler.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface DividerPropsModel
  extends SpacingStylerParamsModel,
    WithChildrenPropsModel<TranslationTextModel>,
    WithTestIdModel {}
