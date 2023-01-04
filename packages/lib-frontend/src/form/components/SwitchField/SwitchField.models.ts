import type { _SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/_SwitchField.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export interface SwitchFieldPropsModel extends Omit<_SwitchFieldPropsModel, 'label'> {
  label?: TranslatableTextModel;
}
