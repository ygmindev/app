import type { FCModel } from '@lib/frontend/core/core.models';
import { _GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/_GlobalStyle';
import type { GlobalStylePropsModel } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { memo } from 'react';

export const GlobalStyle: FCModel<GlobalStylePropsModel> = memo(({ sheet }) => {
  const theme = useTheme();
  return <_GlobalStyle sheet={sheet(theme)} />;
});
