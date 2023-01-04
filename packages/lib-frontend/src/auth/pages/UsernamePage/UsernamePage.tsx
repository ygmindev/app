import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel, PagePropsModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const UsernamePage: FCModel<PagePropsModel> = ({ initialState, testID }) => {
  return (
    <Root initialState={initialState}>
      <Wrapper
        grow
        p
        spacing
        testID={testID}>
        <UsernameForm />
      </Wrapper>
    </Root>
  );
};
