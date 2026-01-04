import { cssConfig } from '@lib/config/css/css.base';
import { type FCModel } from '@lib/frontend/core/core.models';
import { GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle';
import { type StyleProviderPropsModel } from '@lib/frontend/style/containers/StyleProvider/StyleProvider.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
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
