import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { ActivePropsModel } from '@lib/frontend/route/components/Active/Active.models';
import { useActive } from '@lib/frontend/route/hooks/useActive/useActive';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Active: SFCModel<ActivePropsModel> = ({ testID, ...props }) => {
  const theme = useTheme();
  const { isActive } = useRouter();
  const { styles } = useStyles({ props });
  const { current, previous } = useActive();
  const { current: currentLocation, previous: previousLocation } = useStore((state) => state.route);

  return (
    <Wrapper
      grow
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Slide
        duration={theme.animation.transition}
        isAbsoluteFill
        isVisible={
          previousLocation && previousLocation.pathname
            ? isActive({ from: previousLocation.pathname })
            : true
        }>
        {previous}
      </Slide>

      {currentLocation && currentLocation.pathname && (
        <Slide
          duration={theme.animation.transition}
          isAbsoluteFill
          isVisible={isActive({ from: currentLocation.pathname })}>
          {current}
        </Slide>
      )}
    </Wrapper>
  );
};
