import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type NavigationLayoutPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const NavigationLayout: LFCModel<NavigationLayoutPropsModel> = ({
  children,
  route,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { isActive, push } = useRouter();
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isRow>
      <Wrapper
        isVerticalScrollable
        p
        s={THEME_SIZE.SMALL}
        width={theme.layout.navigation.width}>
        {route?.routes?.map(({ fullpath, icon, pathname, title }) => (
          <Button
            elementState={isActive({ pathname }) ? ELEMENT_STATE.ACTIVE : undefined}
            icon={icon}
            key={pathname}
            onPress={async () => push({ pathname: fullpath ?? pathname })}
            type={BUTTON_TYPE.INVISIBLE}>
            {title}
          </Button>
        ))}
      </Wrapper>

      <Wrapper
        flex
        isVerticalScrollable
        p>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
