import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { ReactNode } from 'react';

export interface DroppablePropsModel
  extends Pick<DropdownPropsModel, 'maxWidth'>,
    WithChildrenPropsModel {
  anchor(isActive?: boolean): ReactNode;
}
