import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';
import { type ReactNode } from 'react';

export type TooltipIconPropsModel = ThemeColorPropsModel &
  ChildrenPropsModel<AsyncTextModel | ReactNode | Array<ReactNode>> &
  WithIconPropsModel;
