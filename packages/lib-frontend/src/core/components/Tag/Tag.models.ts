import type { IconTextPropsModel } from '@lib/frontend/core/components/IconText/IconText.models';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface TagPropsModel
  extends Pick<IconTextPropsModel, 'children' | 'icon' | 'color' | 'isCapitalize' | 'isUppercase'>,
    WithTestIdModel {
  color?: ThemeColorModel;
}
