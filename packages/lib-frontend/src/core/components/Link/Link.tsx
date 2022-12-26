import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { Activate } from '@lib/frontend/core/components/Activate/Activate';
import { _Link } from '@lib/frontend/core/components/Link/_Link';
import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { THEME_COLOR, THEME_COLOR_SHADE } from '@lib/frontend/style/style.constants';
import { isFunction, isString } from 'lodash';
import { useState } from 'react';

export { _linkOpen as linkOpen } from '@lib/frontend/core/components/Link/_Link';

const _LinkAnimatable = animatable<_LinkPropsModel>({ Component: _Link });

export const Link: SFCModel<LinkPropsModel> = ({ children, testID, ...props }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { t } = useTranslation();
  const { styles } = useStyles({
    props: { color: THEME_COLOR.PRIMARY, ...props, shade: isActive ? THEME_COLOR_SHADE.DARK : undefined },
    stylers: [textStyler],
  });
  const theme = useTheme();

  return (
    <Activate
      onActive={() => setIsActive(true)}
      onInactive={() => setIsActive(false)}>
      {() => (
        <Wrapper testID={testID}>
          <_LinkAnimatable
            {...props}
            // animation={undefined}
            duration={theme.animation.duration}
            style={styles}
            // transition={['color'] as Array<never>}
          >
            {isFunction(children) || isString(children) ? t(children) : children}
          </_LinkAnimatable>
        </Wrapper>
      )}
    </Activate>
  );
};
