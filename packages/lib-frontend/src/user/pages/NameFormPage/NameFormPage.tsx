import type { SFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { NAME_FORM_CONTAINER_PROPS } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.constants';
import type { NameFormPagePropsModel } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.models';

export const NameFormPage: SFCModel<NameFormPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <FormContainer
      style={styles}
      testID={testID}
      {...NAME_FORM_CONTAINER_PROPS}
    />
  );
};
