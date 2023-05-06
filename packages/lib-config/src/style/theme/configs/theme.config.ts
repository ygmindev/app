import { _themeConfig } from '@lib/config/style/theme/_theme.config';
import type { _ThemeConfigModel } from '@lib/config/style/theme/_theme.models';
import { themeConfigParams } from '@lib/config/style/theme/params/theme.params';

export const themeConfig: _ThemeConfigModel = _themeConfig(themeConfigParams);
