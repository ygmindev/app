import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type {{NAME}}(pascalCase)PagePropsModel } from '#lib-frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const {{NAME}}(pascalCase)Page: SFCModel<{{NAME}}(pascalCase)PagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <Text>{{NAME}}(pascalCase)Page</Text>
    </Wrapper>
  );
};
