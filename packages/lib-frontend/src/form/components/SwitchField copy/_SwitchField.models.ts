import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { StringFieldPropsModel } from '@lib/frontend/form/form.models';

export interface _SwitchFieldPropsModel extends StringFieldPropsModel<'true' | 'false'> {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
}
