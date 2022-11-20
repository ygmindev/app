import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { IconTypeModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface _SwitchFieldPropsModel
  extends WithFieldPropsModel<'true' | 'false'>,
    WithTestIdModel {
  activeIcon?: IconTypeModel;
  inactiveIncon?: IconTypeModel;
}
