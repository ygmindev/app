import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { NavigationBar } from '@lib/frontend/core/containers/NavigationBar/NavigationBar';
import type { OptionModel, SFCPropsModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import type { NavigationLayoutPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { ReactElement } from 'react';

export const NavigationLayout = <TOption extends OptionModel>({
  children,
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
      basis={0}
      grow
      isRow={!isMobile}
      spacing
      style={styles}>
      <NavigationBar
        options={options}
        value={value}
      />

      <Wrapper
        basis={0}
        grow
        isVerticalScrollable>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
