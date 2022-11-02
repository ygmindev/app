import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { SettingsPropsModel } from '@lib/frontend/settings/containers/Settings/Settings.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const Settings: SFCModel<SettingsPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <Text>Settings</Text>
    </Wrapper>
  );
};
