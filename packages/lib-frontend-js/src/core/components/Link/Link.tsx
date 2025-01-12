import { type AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { _Link } from '@lib/frontend/core/components/Link/_Link';
import { type LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type TFCModel } from '@lib/frontend/core/core.models';
import { useTextStyles } from '@lib/frontend/style/hooks/useTextStyles/useTextStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import isString from 'lodash/isString';
import { useRef } from 'react';

export const Link: TFCModel<LinkPropsModel> = ({ children, isNewTab, pathname, ...props }) => {
  const { textProps } = useTextStyles({ props });
  const theme = useTheme();
  const ref = useRef<AnimatableRefModel>(null);
  return isString(children) ? (
    <_Link
      {...textProps}
      isNewTab={isNewTab}
      pathname={pathname}>
      <Activatable
        onActive={() => ref?.current?.toState(ELEMENT_STATE.ACTIVE)}
        onInactive={() => ref?.current?.toState(ELEMENT_STATE.INACTIVE)}>
        <Wrapper>
          <AnimatableText
            animation={{
              states: {
                [ELEMENT_STATE.ACTIVE]: {
                  color: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.ACTIVE],
                },
                [ELEMENT_STATE.INACTIVE]: {
                  color: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
                },
              },
            }}
            ref={ref}>
            {children}
          </AnimatableText>
        </Wrapper>
      </Activatable>
    </_Link>
  ) : (
    <_Link
      {...textProps}
      isNewTab={isNewTab}
      pathname={pathname}>
      {children}
    </_Link>
  );
};
