import type { ThemeConfigModel } from '@lib/config/theme/theme.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';

export interface _StyleProviderPropsModel extends WithChildrenPropsModel {
  theme: ThemeConfigModel;
}
