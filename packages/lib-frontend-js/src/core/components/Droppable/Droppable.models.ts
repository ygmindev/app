import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { type DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type ReactElement } from 'react';

export type DroppablePropsModel = {
  anchor(params: boolean): ReactElement<WrapperPropsModel>;
} & Pick<ActivatablePropsModel, 'trigger'> &
  Omit<DropdownPropsModel, 'anchor' | 'onToggle'>;
