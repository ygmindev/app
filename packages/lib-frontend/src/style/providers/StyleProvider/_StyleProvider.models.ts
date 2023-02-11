import type { ProviderPropsModel } from '@lib/frontend/core/core.models';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { StyleBrightnessModel } from '@lib/frontend/style/style.models';

export interface _StyleProviderPropsModel
  extends ProviderPropsModel<{ brightness?: StyleBrightnessModel; theme: UseThemeModel }> {}
