import type { DropPropsModel } from '@lib/frontend/core/components/Drop/Drop.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { ReactNode } from 'react';

export interface TooltipPropsModel extends Pick<DropPropsModel, 'children'>, WithTestIdModel {
  tooltip?: ReactNode | string;
}
