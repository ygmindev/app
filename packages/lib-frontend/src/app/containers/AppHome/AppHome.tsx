import type { AppHomePropsModel } from '@lib/frontend/app/containers/AppHome/AppHome.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const AppHome: SFCModel<AppHomePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return <Wrapper style={styles} testID={testID}></Wrapper>;
};
