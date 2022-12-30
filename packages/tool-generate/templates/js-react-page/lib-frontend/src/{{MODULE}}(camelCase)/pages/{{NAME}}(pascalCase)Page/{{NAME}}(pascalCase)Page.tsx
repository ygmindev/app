import { Text } from '@lib/frontend/core/components/Text/Text';
import { {{NAME}}(pascalCase) } from '@lib/frontend/{{MODULE}}(camelCase)/containers/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import type { FCModel, PagePropsModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const {{NAME}}(pascalCase)Page: FCModel<PagePropsModel> = ({ initialState, testID }) => {
  return (
    <Root initialState={initialState}>
      <Wrapper testID={testID}>
        <Text>{{NAME}}(pascalCase)Page</Text>
      </Wrapper>
    </Root>
  );
};
