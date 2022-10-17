import { _Loading } from '@lib/frontend/core/components/Loading/_Loading';
import type { LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import { get } from 'lodash';

export const Loading: SFCModel<LoadingPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  size = THEME_SIZE.MEDIUM,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const fontSize = get(theme.font.size, size);
  const fontColor = get(theme.colors, [color, 'main']);
  return (
    <_Loading
      color={fontColor}
      size={fontSize}
      style={styles}
      testID={testID}
    />
  );
};
