import { type AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { _Link } from '@lib/frontend/core/components/Link/_Link';
import { type LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { View } from '@lib/frontend/core/components/View/View';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type TFCModel } from '@lib/frontend/core/core.models';
import { useTextStyles } from '@lib/frontend/style/hooks/useTextStyles/useTextStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import isString from 'lodash/isString';
import { useRef } from 'react';

export const Link: TFCModel<LinkPropsModel> = ({ children, ...props }) => {
  const { textProps } = useTextStyles({ props });
  const theme = useTheme();
  const ref = useRef<AnimatableRefModel>(null);
  return isString(children) ? (
    <Activatable
      onActive={() => ref?.current?.toState(ELEMENT_STATE.ACTIVE)}
      onInactive={() => ref?.current?.toState(ELEMENT_STATE.INACTIVE)}>
      <View>
        <AnimatableText
          {...textProps}
          animation={{
            states: {
              [ELEMENT_STATE.ACTIVE]: { color: theme.color.palette.primary.active },
              [ELEMENT_STATE.INACTIVE]: { color: theme.color.palette.primary.main },
            },
          }}
          ref={ref}>
          {children}
        </AnimatableText>
      </View>
    </Activatable>
  ) : (
    <_Link {...textProps}>{children}</_Link>
  );
};
