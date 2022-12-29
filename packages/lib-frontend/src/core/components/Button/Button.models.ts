import type { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ThemeBasicSizeModel, ThemeColorModel } from '@lib/frontend/style/style.models';

export type ButtonTypeModel = `${BUTTON_TYPE}`;

export interface ButtonPropsModel
  extends Omit<PressablePropsModel, 'children'>,
    ChildrenPropsModel<string>,
    Pick<IconPropsModel, 'icon'> {
  color?: ThemeColorModel;
  size?: ThemeBasicSizeModel;
  type?: ButtonTypeModel;
}
