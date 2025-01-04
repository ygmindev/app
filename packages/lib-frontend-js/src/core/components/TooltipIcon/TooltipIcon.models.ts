import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type AsyncTextModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';
import { type ReactNode } from 'react';

export type TooltipIconPropsModel = ThemeColorPropsModel &
  ChildrenPropsModel<AsyncTextModel | ReactNode | Array<ReactNode>> &
  WithIconPropsModel;
