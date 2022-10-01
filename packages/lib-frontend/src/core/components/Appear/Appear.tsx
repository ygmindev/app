import { APPEAR_SCALE_FROM } from '@lib/frontend/core/components/Appear/Appear.constants';
import type { AppearPropsModel } from '@lib/frontend/core/components/Appear/Appear.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useIsMounted } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useState } from 'react';

export const Appear: SFCModel<AppearPropsModel> = ({
  children,
  duration,
  isLazy,
  isScalable = true,
  isVisible,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const _duration = duration || theme.animation.duration;
  const [isRender, setIsRender] = useState<boolean>(false);

  const isMounted = useIsMounted(
    {
      onMount: () =>
        isVisible
          ? setIsRender(true)
          : sleep({ duration: _duration }).then(() => isMounted && setIsRender(false)),
    },
    [isVisible],
  );

  return !isLazy || isRender || isVisible ? (
    <Wrapper
      animation={{
        animation: {
          from: isVisible
            ? { opacity: 0, transform: isScalable ? [{ scale: APPEAR_SCALE_FROM }] : undefined }
            : { opacity: 1, transform: isScalable ? [{ scale: 1 }] : undefined },
          to: isVisible
            ? { opacity: 1, transform: isScalable ? [{ scale: 1 }] : undefined }
            : { opacity: 0, transform: isScalable ? [{ scale: APPEAR_SCALE_FROM }] : undefined },
        },
        duration: _duration,
      }}
      style={styles}
      {...props}>
      {children}
    </Wrapper>
  ) : null;
};
