import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import type { ReactNode } from 'react';

export interface TooltipPropsModel
  extends ChildrenPropsModel<TranslatableTextModel | ReactNode | Array<ReactNode>>,
    Pick<IconPropsModel, 'icon'> {
  color?: ThemeColorModel;
}
