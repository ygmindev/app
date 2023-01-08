import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';

export interface TooltipPropsModel extends ChildrenPropsModel<TranslatableTextModel> {
  color?: ThemeColorModel;
}
