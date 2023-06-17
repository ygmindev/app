import type { IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import type {
  StringFieldPropsModel,
  TranslatableFieldPropsModel,
} from '#lib-frontend/form/form.models';

export type SwitchFieldPropsModel = {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
} & TranslatableFieldPropsModel<StringFieldPropsModel<'true' | 'false'>>;
