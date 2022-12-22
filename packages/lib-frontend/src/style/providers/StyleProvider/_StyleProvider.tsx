import { themeConfig } from '@lib/config/style/theme/theme';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider.models';
import type { ReactNode } from 'react';
import type { DefaultTheme } from 'react-native-paper';
import { Provider } from 'react-native-paper';

export const _StyleProvider = composeComponent<
  _StyleProviderPropsModel,
  { children: ReactNode; theme: typeof DefaultTheme | undefined }
>({
  Component: Provider,
  getProps: ({ children, value }) => ({ children, theme: value ? themeConfig(value) : undefined }),
});
