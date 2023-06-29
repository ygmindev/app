import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import {
  type StringFieldPropsModel,
  type TranslatableFieldPropsModel,
} from '#lib-frontend/form/form.models';
import { type BooleanStringModel } from '#lib-shared/core/core.models';

export type SwitchFieldPropsModel = {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
} & TranslatableFieldPropsModel<StringFieldPropsModel<BooleanStringModel>>;
