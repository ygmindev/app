import type { {{NAME}}(pascalCase)PropsModel } from '{{PATH}}/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const {{NAME}}(pascalCase): SFCModel<{{NAME}}(pascalCase)PropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      style={styles}
      testID={testID}></Wrapper>
  );
};
