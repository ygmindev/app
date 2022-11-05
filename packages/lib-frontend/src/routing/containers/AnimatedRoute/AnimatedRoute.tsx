import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { _useCurrentRoute } from '@lib/frontend/routing/containers/AnimatedRoute/_useCurrentRoute';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import type { ReactElement } from 'react';
import { useState } from 'react';

export const AnimatedRoute: SFCModel = ({ ...props }) => {
  const { styles } = useStyles({ props });
  const current = _useCurrentRoute();
  const [previous, setPrevious] = useState<ReactElement | null | undefined>(current);

  useChange({ onChange: setPrevious, value: current });

  return (
    <Wrapper
      grow
      position={SHAPE_POSITION.RELATIVE}
      style={styles}>
      <Wrapper isAbsoluteFill>
        <Slide isVisible>{current}</Slide>
      </Wrapper>

      {previous && (
        <Wrapper isAbsoluteFill>
          <Slide isVisible>{previous}</Slide>
        </Wrapper>
      )}
    </Wrapper>
  );
};
