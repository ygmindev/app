import { config } from '@lib/config/css/css.global';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { _StyleProvider } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider';
import { type StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/StyleProvider.models';
import { useMemo } from 'react';

export const StyleProvider: FCModel<StyleProviderPropsModel> = ({ children }) => {
  const theme = useTheme();
  const [brightness] = useStore('style.brightness');
  const sheet = useMemo(() => config.stylesheet(theme), [config, theme]);
  return (
    <_StyleProvider value={{ brightness }}>
      <GlobalStyle sheet={sheet} />

      {children}
    </_StyleProvider>
  );
};
