import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { CountryInput } from '@lib/frontend/locale/components/CountryInput/CountryInput';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type PhoneFormPropsModel } from '@lib/frontend/user/components/PhoneForm/PhoneForm.models';
import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';

export const PhoneForm: LFCModel<PhoneFormPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        { element: <CountryInput />, id: 'callingCode' },
        { element: <PhoneInput />, id: 'phone' },
      ]}
      s={THEME_SIZE.SMALL}
    />
  );
};
