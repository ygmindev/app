import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';

export interface _StyleProviderPropsModel extends WithChildrenPropsModel {
  theme: ThemeConfigParamsModel;
}
