import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { _StyleProvider } from '@lib/frontend/styling/providers/StyleProvider/_StyleProvider';
import type { StyleProviderPropsModel } from '@lib/frontend/styling/providers/StyleProvider/StyleProvider.models';

export const StyleProvider: SFCModel<StyleProviderPropsModel> = ({ children }) => {
  const theme = useTheme();
  return <_StyleProvider theme={theme}>{children}</_StyleProvider>;
};
