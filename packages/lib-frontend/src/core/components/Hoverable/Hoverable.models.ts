import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface HoverableChildPropsModel
  extends Pick<PressablePropsModel, 'onPressIn' | 'onPressOut'> {
  onMouseEnter: CallableModel;
  onMouseLeave: CallableModel;
  onResponderGrant: CallableModel;
  onResponderRelease: CallableModel;
}

export interface HoverablePropsModel
  extends WithChildrenPropsModel<
    | ReactElement<HoverableChildPropsModel>
    | ((isHovered: boolean) => ReactElement<HoverableChildPropsModel>)
  > {
  onHoverIn?: CallableModel;
  onHoverOut?: CallableModel;
}
