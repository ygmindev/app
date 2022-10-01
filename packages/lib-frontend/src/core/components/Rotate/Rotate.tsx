import type { RotatePropsModel } from '@lib/frontend/core/components/Rotate/Rotate.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const Rotate: SFCModel<RotatePropsModel> = ({ children, testID, x, y, z, ...props }) => {
  const { styles } = useStyles({
    props,
    stylers: [
      {
        transform: [
          { rotateX: `${x || 0}deg` },
          { rotateY: `${y || 0}deg` },
          { rotateZ: `${z || 0}deg` },
        ],
      },
    ],
  });
  return (
    <Wrapper
      style={styles}
      testID={testID}
      // TODO: fix this
      // animation={{ transition: ['rotateX', 'rotateY', 'rotateZ'] }}
    >
      {children}
    </Wrapper>
  );
};
