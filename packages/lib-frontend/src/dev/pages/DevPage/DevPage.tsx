import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { FORM_CONTAINER_PROPS_FIXTURE } from '@lib/frontend/form/containers/FormContainer/FormContainer.fixtures';

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  return (
    <Wrapper
      p
      spacing
      testID={testID}>
      <FormContainer {...FORM_CONTAINER_PROPS_FIXTURE} />

      <OtpField />
    </Wrapper>
  );
};
