import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { type BadgeablePropsModel } from '@lib/frontend/core/components/Badgeable/Badgeable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type MeasureModel, type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type ReactElement, useState } from 'react';

export const Badgeable: LFCModel<BadgeablePropsModel> = ({
  badgeElement,
  children,
  isHoverable,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [measure, measureSet] = useState<MeasureModel>();

  const elementF = (isActive?: boolean): ReactElement<WrapperPropsModel> => (
    <Wrapper
      flex
      position={SHAPE_POSITION.RELATIVE}>
      <Appearable
        isActive={isActive}
        isHidden={!measure}
        isLazy={false}
        onMeasure={measureSet}
        position={SHAPE_POSITION.ABSOLUTE}
        right={-(measure?.width ?? 0) / 2}
        top={-(measure?.height ?? 0) / 2}
        zIndex>
        {badgeElement}
      </Appearable>

      {children}
    </Wrapper>
  );

  return isHoverable ? (
    <Activatable {...wrapperProps}>{(isActive) => elementF(isActive)}</Activatable>
  ) : (
    <Wrapper {...wrapperProps}>
      {elementF(true)}

      {children}
    </Wrapper>
  );
};
