import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type {{NAME}}(pascalCase)PagePropsModel } from '#lib-frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const {{NAME}}(pascalCase)Page: SFCModel<{{NAME}}(pascalCase)PagePropsModel> = ({ testID, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      grow
      testID={testID}>
      <Text>{{NAME}}(pascalCase)Page</Text>
    </Wrapper>
  );
};
