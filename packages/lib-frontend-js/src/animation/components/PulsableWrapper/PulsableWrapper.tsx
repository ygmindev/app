import { type PulsableWrapperPropsModel } from '@lib/frontend/animation/components/PulsableWrapper/PulsableWrapper.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE, Z_INDEX_BOTTOM } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const PulsableWrapper: LFCModel<PulsableWrapperPropsModel> = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Wrapper
      {...props}
      position={SHAPE_POSITION.RELATIVE}>
      <Wrapper
        animation={{
          duration: theme.animation.transition,
          repeat: Infinity,
          states: {
            [ELEMENT_STATE.ACTIVE]: {
              opacity: theme.opaque[THEME_SIZE.SMALL],
              scale: 1,
            },
            [ELEMENT_STATE.INACTIVE]: {
              opacity: 0,
              scale: 1.5,
            },
          },
        }}
        backgroundColor={props.backgroundColor ?? THEME_COLOR.PRIMARY}
        backgroundRole={props.backgroundRole}
        isAbsoluteFill
        round={props.round ?? true}
        zIndex={Z_INDEX_BOTTOM}
      />

      {children}
    </Wrapper>
  );
};
