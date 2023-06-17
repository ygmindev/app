import type { ReactNode } from 'react';

import type { IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import type { ThemeColorModel } from '#lib-frontend/style/style.models';

export type TooltipPropsModel = {
  color?: ThemeColorModel;
} & ChildrenPropsModel<TranslatableTextModel | ReactNode | Array<ReactNode>> &
  Pick<IconPropsModel, 'icon'>;
