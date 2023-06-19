import { AppRegistry } from 'react-native-web';

import { INTERNATIONALIZE_CONFIG_STATIC } from '#lib-config/locale/internationalize/internationalize.constants';
import type { FCModel } from '#lib-frontend/core/core.models';
import { Root } from '#lib-frontend/root/containers/Root/Root';
import type {
  RenderAppModel,
  RenderAppParamsModel,
} from '#lib-platform/core/utils/renderApp/renderApp.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { ROUTE } from '#lib-shared/route/route.constants';

const { languageDefault } = INTERNATIONALIZE_CONFIG_STATIC;

export const renderApp = ({
  additionalProviders,
  children,
  context,
}: RenderAppParamsModel): RenderAppModel => {
  const contextF = merge(
    filterNil([
      context?.locale?.lang &&
        languageDefault !== context.locale.lang && { [ROUTE]: { basename: context.locale.lang } },
      context,
    ]),
  );
  const App: FCModel = () => (
    <Root
      additionalProviders={additionalProviders}
      context={contextF}>
      {children}
    </Root>
  );
  AppRegistry.registerComponent('App', () => App);
  const { element, getStyleElement } = AppRegistry.getApplication('App', {});
  return { element, getCss: getStyleElement };
};
