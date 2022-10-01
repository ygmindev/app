import type { IconTypeModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface _SwitchFieldPropsModel extends WithFieldPropsModel<boolean>, WithTestIdModel {
  activeIcon?: IconTypeModel;
  inactiveIncon?: IconTypeModel;
}
