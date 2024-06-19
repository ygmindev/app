import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { NavigationBar } from '@lib/frontend/core/containers/NavigationBar/NavigationBar';
import { type SFCPropsModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { type NavigationLayoutPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { type ReactElement } from 'react';

export const NavigationLayout = <TOption extends TranslatableOptionModel>({
  children,
  isHorizontal = true,
  onChange,
  options,
  title,
  value,
  ...props
}: SFCPropsModel<NavigationLayoutPropsModel<TOption>>): ReactElement<
  SFCPropsModel<NavigationLayoutPropsModel<TOption>>
> => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  const isHorizontalF = isHorizontal || isMobile;
  return (
    <Wrapper
      backgroundColor={THEME_COLOR_MORE.SURFACE}
      flex
      isRow={!isHorizontalF}
      style={styles}>
      <NavigationBar
        isHorizontal={isHorizontalF}
        onChange={onChange}
        options={options}
        title={title}
        value={value}
      />

      <Wrapper
        basis={0}
        flex
        isVerticalScrollable
        p>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
