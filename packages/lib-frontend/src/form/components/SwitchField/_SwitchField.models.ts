import type { FieldPropsModel } from '@lib/frontend/core/core.models';
import type { IconTypeModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';

export interface _SwitchFieldPropsModel
  extends FieldPropsModel<'true' | 'false'>,
    TestIdPropsModel {
  activeIcon?: IconTypeModel;
  inactiveIncon?: IconTypeModel;
}
