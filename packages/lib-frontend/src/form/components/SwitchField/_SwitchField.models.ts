import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { FieldPropsModel } from '@lib/frontend/form/form.models';

export interface _SwitchFieldPropsModel extends FieldPropsModel<'true' | 'false'> {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
}
