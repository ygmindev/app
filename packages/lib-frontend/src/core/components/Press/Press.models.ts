import type { TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { StyleModel } from '@lib/frontend/styling/styling.models';
import type { ViewStylerParamsModel } from '@lib/frontend/styling/utils/styler/viewStyler/viewStyler.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactNode } from 'react';

export interface PressPropsModel
  extends Pick<TooltipPropsModel, 'tooltip'>,
    Pick<ViewStylerParamsModel, 'p'>,
    WithChildrenPropsModel<ReactNode | ((isActive?: boolean) => ReactNode)>,
    WithTestIdModel {
  confirmMessage?: string;
  from?: StyleModel;
  isCenter?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isPressed?: boolean;
  onPress?: CallableModel;
  onPressIn?: CallableModel;
  onPressOut?: CallableModel;
  to?: StyleModel;
}
