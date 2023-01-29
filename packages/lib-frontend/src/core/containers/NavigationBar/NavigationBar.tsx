import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { NAVIGATION_BAR_WIDTH } from '@lib/frontend/core/containers/NavigationBar/NavigationBar.constants';
import type { NavigationBarPropsModel } from '@lib/frontend/core/containers/NavigationBar/NavigationBar.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import type { ReactElement } from 'react';

export const NavigationBar = ({
  options,
  testID,
  value,
  ...props
}: SFCPropsModel<NavigationBarPropsModel>): ReactElement<
  SFCPropsModel<NavigationBarPropsModel>
> => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  return (
    <Activatable
      isPressable={false}
      // onActive={() => console.warn('active')}
      // onInactive={() => console.warn('inactive')}
    >
      <Wrapper
        border={BORDER_DIRECTION.RIGHT}
        isFullWidth={isMobile}
        isHorizontalScrollable={isMobile}
        isRow={isMobile}
        isVerticalScrollable={!isMobile}
        p
        spacing={THEME_BASIC_SIZE.SMALL}
        style={styles}
        testID={testID}
        width={isMobile ? undefined : NAVIGATION_BAR_WIDTH}>
        {options &&
          options.map(({ id, label, onPress }) => {
            const _pathname = trimPathname(id);
            return (
              <Button
                elementState={
                  value && _pathname === trimPathname(value) ? ELEMENT_STATE.ACTIVE : undefined
                }
                key={id}
                onPress={onPress}
                testID={label}
                type={BUTTON_TYPE.TRANSPARENT}>
                {label}
              </Button>
            );
          })}
      </Wrapper>
    </Activatable>
  );
};
