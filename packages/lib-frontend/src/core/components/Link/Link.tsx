import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { _Link } from '@lib/frontend/core/components/Link/_Link';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

export const Link: SFCModel<LinkPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props, stylers: [textStyler] });
  const theme = useTheme();
  return (
    <Activatable>
      {(isActive) => (
        <View>
          <_Link
            style={{
              ...styles,
              color: isActive
                ? palette({
                    color: theme.colors.tone.primary.main,
                    lightness: theme.colors.activeLightness,
                  })
                : theme.colors.tone.primary.main,
            }}
            testID={testID}>
            {children}
          </_Link>
        </View>
      )}
    </Activatable>
  );
};
