import type { ProviderPropsModel } from '@lib/frontend/core/core.models';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { BrightnessModel } from '@lib/frontend/style/style.models';

export interface _StyleProviderPropsModel
  extends ProviderPropsModel<{ brightness?: BrightnessModel; theme: UseThemeModel }> {}
