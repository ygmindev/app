import type { DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import type { ReactNode } from 'react';

export interface TooltipPropsModel extends Pick<DroppablePropsModel, 'children'> {
  tooltip?: ReactNode | string;
}
