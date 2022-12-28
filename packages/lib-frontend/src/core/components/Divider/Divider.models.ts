import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { SpacingStylerParamsModel } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler.models';

export interface DividerPropsModel
  extends WithChildrenPropsModel<TranslatableTextModel>,
    SpacingStylerParamsModel {}
