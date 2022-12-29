import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { SpacingStylerParamsModel } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler.models';

export interface DividerPropsModel
  extends ChildrenPropsModel<TranslatableTextModel>,
    SpacingStylerParamsModel {}
