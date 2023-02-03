import { sheetConfig } from '@lib/config/style/sheet/configs/sheet.config.global';
import type { FCModel } from '@lib/frontend/core/core.models';
import { GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { _StyleProvider } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider';
import type { StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/StyleProvider.models';

export const StyleProvider: FCModel<StyleProviderPropsModel> = ({ children }) => {
  const theme = useTheme();
  return (
    <_StyleProvider value={theme}>
      <GlobalStyle sheet={sheetConfig} />

      {children}
    </_StyleProvider>
  );
};
