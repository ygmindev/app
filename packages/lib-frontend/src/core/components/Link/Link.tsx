import isString from 'lodash/isString';
import { useRef } from 'react';

import { type AnimatableRefModel } from '#lib-frontend/animation/animation.models';
import { AnimatableText } from '#lib-frontend/animation/components/AnimatableText/AnimatableText';
import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { _Link } from '#lib-frontend/core/components/Link/_Link';
import { type LinkPropsModel } from '#lib-frontend/core/components/Link/Link.models';
import { View } from '#lib-frontend/core/components/View/View';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';

export const Link: SFCModel<LinkPropsModel> = ({ children, ...props }) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const ref = useRef<AnimatableRefModel>(null);
  return isString(children) ? (
    <Activatable
      onActive={() => ref?.current?.toState(ELEMENT_STATE.ACTIVE)}
      onInactive={() => ref?.current?.toState(ELEMENT_STATE.INACTIVE)}
      style={styles}>
      <View>
        <AnimatableText
          {...props}
          animation={{
            states: {
              [ELEMENT_STATE.ACTIVE]: { color: theme.color.palette.primary.main.active },
              [ELEMENT_STATE.INACTIVE]: { color: theme.color.palette.primary.main.base },
            },
          }}
          ref={ref}>
          {children}
        </AnimatableText>
      </View>
    </Activatable>
  ) : (
    <_Link {...props}>{children}</_Link>
  );
};
