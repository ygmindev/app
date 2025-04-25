import { type RLFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  type PhoneInputPropsModel,
  type PhoneInputRefModel,
} from '@lib/frontend/user/components/PhoneInput/PhoneInput.models';

export const PhoneInput: RLFCModel<PhoneInputRefModel, PhoneInputPropsModel> = ({
  defaultValue,
  onChange,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  return (
    <TextInput
      {...props}
      autoComplete="cell"
      icon="phone"
      keyboard={TEXT_INPUT_KEYBOARD.TELEPHONE}
      label={t('user:phone')}
      onChange={valueControlledSet}
      value={valueControlled}
    />
  );
};
