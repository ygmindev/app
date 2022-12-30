import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel, PagePropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { FORM_CONTAINER_PROPS_FIXTURE } from '@lib/frontend/form/containers/FormContainer/FormContainer.fixtures';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const DevPage: FCModel<PagePropsModel> = ({ initialState, testID }) => {
  return (
    <Root initialState={initialState}>
      <Wrapper
        p
        spacing
        testID={testID}>
        <FormContainer {...FORM_CONTAINER_PROPS_FIXTURE} />
      </Wrapper>
    </Root>
  );
};
