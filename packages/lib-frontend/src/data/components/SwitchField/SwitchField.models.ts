import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type TranslatableFieldPropsModel } from '#lib-frontend/data/data.models';

export type SwitchFieldPropsModel = TranslatableFieldPropsModel<boolean> & {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
};
