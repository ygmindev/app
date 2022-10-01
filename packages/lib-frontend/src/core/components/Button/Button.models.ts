import type { IconTextPropsModel } from '@lib/frontend/core/components/IconText/IconText.models';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import type {
  ThemeBasicSizeModel,
  ThemeColorModel,
} from '@lib/frontend/styling/utils/theme/theme.models';

export interface ButtonPropsModel
  extends Omit<PressPropsModel, 'children'>,
    Pick<IconTextPropsModel, 'children' | 'icon' | 'isCapitalize'> {
  color?: ThemeColorModel;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  isTransparent?: boolean;
  size?: ThemeBasicSizeModel;
}
