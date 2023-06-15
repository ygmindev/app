import { AppRegistry } from 'react-native-web';

import type { FCModel } from '#lib-frontend/core/core.models';
import { Root } from '#lib-frontend/root/containers/Root/Root';
import type {
  RenderAppModel,
  RenderAppParamsModel,
} from '#lib-platform/core/utils/renderApp/renderApp.models';

export const renderApp = ({
  additionalProviders,
  children,
  context,
}: RenderAppParamsModel): RenderAppModel => {
  const App: FCModel = () => (
    <Root
      additionalProviders={additionalProviders}
      context={context}>
      {children}
    </Root>
  );
  AppRegistry.registerComponent('App', () => App);
  const { element, getStyleElement } = AppRegistry.getApplication('App', {});
  return { element, getCss: getStyleElement };
};
