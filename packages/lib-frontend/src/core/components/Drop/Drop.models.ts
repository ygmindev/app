import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { ReactNode } from 'react';

export interface DropPropsModel
  extends Pick<DropdownPropsModel, 'maxWidth'>,
    WithChildrenPropsModel<ReactNode | ((isActive: boolean) => ReactNode)>,
    WithTestIdModel {
  render?(isActive: boolean): ReactNode;
}
