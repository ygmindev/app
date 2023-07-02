import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type HomePagePropsModel } from '#lib-frontend/deleteme/pages/HomePage/HomePage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const HomePage: SFCModel<HomePagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      p
      s
      style={styles}
      testID={testID}>
      <Text type={FONT_TYPE.HEADLINE}>Workspaces</Text>
    </Wrapper>
  );
};
