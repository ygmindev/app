import { useMemo } from 'react';
import { Provider } from 'react-native-paper';

import { _config as _configBase } from '@lib/config/style/theme/theme.base';
import { _config as _configDark } from '@lib/config/style/theme/theme.dark';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type _StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';

export const _StyleProvider: FCModel<_StyleProviderPropsModel> = ({ children, value }) => {
  const theme = useMemo(() => {
    switch (value?.brightness) {
      case STYLE_BRIGHTNESS.DARK:
        return _configDark;
      default:
        return _configBase;
    }
  }, [value?.brightness]);
  return <Provider theme={theme}>{children}</Provider>;
};
