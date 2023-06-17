import type { ReactElement } from 'react';

import type { DropdownPropsModel } from '#lib-frontend/core/components/Dropdown/Dropdown.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type DroppablePropsModel = {
  anchor: CallableModel<ReactElement, boolean>;
} & Omit<DropdownPropsModel, 'anchor' | 'onToggle'>;
