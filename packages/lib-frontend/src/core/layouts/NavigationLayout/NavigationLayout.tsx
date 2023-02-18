import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { NavigationBar } from '@lib/frontend/core/containers/NavigationBar/NavigationBar';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import type { NavigationLayoutPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';
import type { TranslatableOptionModel } from '@lib/frontend/locale/locale.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import type { ReactElement } from 'react';

export const NavigationLayout = <TOption extends TranslatableOptionModel>({
  barElement,
  children,
  onChange,
  options,
  value,
  ...props
}: SFCPropsModel<NavigationLayoutPropsModel<TOption>>): ReactElement<
  SFCPropsModel<NavigationLayoutPropsModel<TOption>>
> => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  return (
    <Wrapper
      backgroundColor={THEME_COLOR.NEUTRAL}
      basis={0}
      grow
      isRow={!isMobile}
      spacing
      style={styles}>
      <NavigationBar
        onChange={onChange}
        options={options}
        value={value}>
        {barElement}
      </NavigationBar>

      <Wrapper
        basis={0}
        grow
        isVerticalScrollable
        p>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
