import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { _Link } from '@lib/frontend/core/components/Link/_Link';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { PropsModel, SFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { isString } from 'lodash';

const _AnimatableLink = animatable<PropsModel<typeof _Link>, TextStyleModel>({
  Component: _Link,
});

export const Link: SFCModel<LinkPropsModel> = ({ children, ...props }) => {
  const theme = useTheme();
  return isString(children) ? (
    <Activatable>
      {(isActive) => (
        <View>
          <_AnimatableLink
            {...props}
            animation={{
              from: { color: theme.colors.tone.primary.main },
              isActive,
              to: {
                color: palette({
                  color: theme.colors.tone.primary.main,
                  lightness: theme.colors.activeLightness,
                }),
              },
            }}>
            {children}
          </_AnimatableLink>
        </View>
      )}
    </Activatable>
  ) : (
    <_Link {...props}>{children}</_Link>
  );
};
