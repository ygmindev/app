import type { IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import type {
  StringFieldPropsModel,
  TranslatableFieldPropsModel,
} from '#lib-frontend/form/form.models';

export interface SwitchFieldPropsModel
  extends TranslatableFieldPropsModel<StringFieldPropsModel<'true' | 'false'>> {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
}
