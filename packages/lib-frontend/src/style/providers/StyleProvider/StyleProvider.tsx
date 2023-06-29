import { useMemo } from 'react';

import { config } from '#lib-config/style/css/css.global';
import { type FCModel } from '#lib-frontend/core/core.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { GlobalStyle } from '#lib-frontend/style/components/GlobalStyle/GlobalStyle';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { _StyleProvider } from '#lib-frontend/style/providers/StyleProvider/_StyleProvider';
import { type StyleProviderPropsModel } from '#lib-frontend/style/providers/StyleProvider/StyleProvider.models';

export const StyleProvider: FCModel<StyleProviderPropsModel> = ({ children }) => {
  const theme = useTheme();
  const brightness = useStore((state) => state.style.brightness);
  const sheet = useMemo(() => config(theme), [config, theme]);
  return (
    <_StyleProvider value={{ brightness, theme }}>
      <GlobalStyle sheet={sheet} />

      {children}
    </_StyleProvider>
  );
};
