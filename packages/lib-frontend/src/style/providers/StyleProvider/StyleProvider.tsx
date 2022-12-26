import '@lib/config/style/sheet/sheet.css';

import type { FCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { _StyleProvider } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider';
import type { StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/StyleProvider.models';

export const StyleProvider: FCModel<StyleProviderPropsModel> = ({ children }) => {
  const theme = useTheme();
  return <_StyleProvider value={theme}>{children}</_StyleProvider>;
};
