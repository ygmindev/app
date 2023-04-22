import type { _TextFieldPropsModel } from '@lib/frontend/form/components/TextField/_TextField.models';
import type { StringFieldPropsModel } from '@lib/frontend/form/form.models';

export interface PhoneFieldPropsModel
  extends StringFieldPropsModel,
    Pick<_TextFieldPropsModel, 'autoComplete' | 'placeholder'> {
  initialCountry?: string;
  isDisabled?: boolean;
}
