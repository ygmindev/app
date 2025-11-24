import { cssConfig } from '@lib/config/css/css.base';
import { type FCModel } from '@lib/frontend/core/core.models';
import { GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/StyleProvider.models';
import { useMemo } from 'react';

export const StyleProvider: FCModel<StyleProviderPropsModel> = ({ children }) => {
  const theme = useTheme();
  const sheet = useMemo(() => cssConfig.params().stylesheet(theme), [theme]);
  return (
    <>
      <GlobalStyle sheet={sheet} />

      {children}
    </>
  );
};
