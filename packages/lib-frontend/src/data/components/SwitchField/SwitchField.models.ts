import { type IconPropsModel } from '@lib-frontend/core/components/Icon/Icon.models';
import { type FieldPropsModel } from '@lib-frontend/data/data.models';

export type SwitchFieldPropsModel = FieldPropsModel<boolean> & {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
};
