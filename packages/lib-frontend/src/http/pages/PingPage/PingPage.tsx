import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { type PingPagePropsModel } from '@lib/frontend/http/pages/PingPage/PingPage.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const PingPage: SFCModel<PingPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      flex
      style={styles}
      testID={testID}>
      <Text>ping</Text>
    </Wrapper>
  );
};
