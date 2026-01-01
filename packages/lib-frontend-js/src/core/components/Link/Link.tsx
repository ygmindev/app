import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { _Link } from '@lib/frontend/core/components/Link/_Link';
import { type LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type TFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTextStyles } from '@lib/frontend/style/hooks/useTextStyles/useTextStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import isString from 'lodash/isString';

export const Link: TFCModel<LinkPropsModel> = ({
  children,
  defaultState,
  elementState,
  isNewTab,
  isUnderline = true,
  onElementStateChange,
  pathname,
  ...props
}) => {
  const { textProps } = useTextStyles({ props: { ...props, isUnderline } });
  const { elementStateControlled, elementStateControlledSet } = useElementStateControlled({
    defaultElementState: defaultState,
    elementState,
    onElementStateChange,
  });
  const theme = useTheme();
  const { t } = useTranslation();
  let childrenF = isArray(children) ? children[0] : children;
  isAsyncText(childrenF) && (childrenF = t(childrenF));
  return isString(childrenF) ? (
    <_Link
      {...textProps}
      isNewTab={isNewTab}
      pathname={pathname}>
      <Activatable
        onActive={() => elementStateControlledSet(ELEMENT_STATE.ACTIVE)}
        onInactive={() => elementStateControlledSet(ELEMENT_STATE.INACTIVE)}>
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
            elementState={elementStateControlled}>
            {childrenF}
          </AnimatableText>
        </Wrapper>
      </Activatable>
    </_Link>
  ) : (
    <_Link
      {...textProps}
      isNewTab={isNewTab}
      pathname={pathname}>
      {childrenF}
    </_Link>
  );
};
