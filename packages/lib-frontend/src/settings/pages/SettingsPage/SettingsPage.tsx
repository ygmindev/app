import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { SettingsPagePropsModel } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const SettingsPage: SFCModel<SettingsPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <Text>SettingsPage</Text>
    </Wrapper>
  );
};
