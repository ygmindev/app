import type { IconTextPropsModel } from '@lib/frontend/core/components/IconText/IconText.models';
import type { ThemeColorModel } from '@lib/frontend/style/utils/theme/theme.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface TagPropsModel
  extends Pick<IconTextPropsModel, 'children' | 'icon' | 'color' | 'isCapitalize' | 'isUppercase'>,
    WithTestIdModel {
  color?: ThemeColorModel;
}
