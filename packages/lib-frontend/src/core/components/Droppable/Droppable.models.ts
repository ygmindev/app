import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { ReactElement } from 'react';

export interface DroppablePropsModel extends Omit<DropdownPropsModel, 'anchor'> {
  anchor: (isActive?: boolean) => ReactElement;
}
