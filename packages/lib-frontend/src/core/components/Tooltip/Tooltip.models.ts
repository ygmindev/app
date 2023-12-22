import { type ReactNode } from 'react';

import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ThemeColorPropsModel } from '#lib-frontend/style/style.models';

export type TooltipPropsModel = ThemeColorPropsModel &
  ChildrenPropsModel<TranslatableTextModel | ReactNode | Array<ReactNode>> &
  WithIconPropsModel;
