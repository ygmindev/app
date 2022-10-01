import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface HoverChildPropsModel extends Pick<PressPropsModel, 'onPressIn' | 'onPressOut'> {
  onMouseEnter: CallableModel;
  onMouseLeave: CallableModel;
  onResponderGrant: CallableModel;
  onResponderRelease: CallableModel;
}

export interface HoverPropsModel
  extends WithChildrenPropsModel<
    | ReactElement<HoverChildPropsModel>
    | ((isHovered: boolean) => ReactElement<HoverChildPropsModel>)
  > {
  onHoverIn?: CallableModel;
  onHoverOut?: CallableModel;
}
