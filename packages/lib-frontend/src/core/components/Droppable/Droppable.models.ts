import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface DroppablePropsModel extends Omit<DropdownPropsModel, 'anchor' | 'onToggle'> {
  anchor: CallableModel<ReactElement, boolean>;
}
