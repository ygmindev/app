import { type CombinedIconPropsModel } from '@lib/frontend/core/components/CombinedIcon/CombinedIcon.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const CombinedIcon: LFCModel<CombinedIconPropsModel> = ({ icons, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      position={SHAPE_POSITION.RELATIVE}>
      {icons.map(({ icon, position }, i) => (
        <Wrapper
          isAbsoluteFill={!position}
          isCenter={!position}
          left={position?.x}
          top={position?.y}
          zIndex={i}>
          <Icon
            icon={icon}
            key={icon}
          />
        </Wrapper>
      ))}
    </Wrapper>
  );
};
