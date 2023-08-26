import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type TranslatableFieldPropsModel } from '#lib-frontend/form/form.models';

export type SwitchFieldPropsModel = TranslatableFieldPropsModel<boolean> & {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
};
