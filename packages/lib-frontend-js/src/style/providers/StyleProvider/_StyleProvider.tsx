import { config as themeConfigBase } from '@lib/config/theme/theme.base';
import { config as themeConfigDark } from '@lib/config/theme/theme.dark';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type _StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import { useMemo } from 'react';
import { Provider } from 'react-native-paper';

export const _StyleProvider: FCModel<_StyleProviderPropsModel> = ({ children, value }) => {
  const theme = useMemo(() => {
    switch (value?.brightness) {
      case STYLE_BRIGHTNESS.DARK:
        return themeConfigDark.config();
      default:
        return themeConfigBase.config();
    }
  }, [value?.brightness]);
  return <Provider theme={theme}>{children}</Provider>;
};
