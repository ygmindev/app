import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { ROUTE } from '@lib/shared/route/route.constants';
import {
  type RenderAppModel,
  type RenderAppParamsModel,
} from '@lib/shared/web/utils/renderApp/renderApp.models';
import { type ComponentType, type ReactElement } from 'react';
import { AppRegistry } from 'react-native-web';

const { languageDefault } = INTERNATIONALIZE_CONFIG;

export const renderApp = ({ Root, children, context }: RenderAppParamsModel): RenderAppModel => {
  const contextF = merge(
    filterNil([
      context?.locale?.lang &&
        languageDefault !== context.locale.lang && { [ROUTE]: { basename: context.locale.lang } },
      context,
    ]),
  );
  const App: FCModel = () => <Root context={contextF}>{children}</Root>;
  const AppRegistryF = AppRegistry as {
    registerComponent: (name: string, component: () => ComponentType) => void;
  };
  AppRegistryF.registerComponent('App', () => App);
  const { element, getStyleElement } = (
    AppRegistry as unknown as {
      getApplication: (
        name: string,
        props: EmptyObjectModel,
      ) => { element: ReactElement; getStyleElement: () => ReactElement };
    }
  ).getApplication('App', {});
  return { element, getStyleSheet: getStyleElement };
};
