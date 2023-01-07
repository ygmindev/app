import type {
  _ExportRendererClientModel,
  _ExportRendererClientParamsModel,
} from '@lib/framework/web/exports/exportRendererClient/_exportRendererClient.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { hydrateRoot } from 'react-dom/client';
import { AppRegistry } from 'react-native-web';

export const _exportRendererClient = ({
  render,
  rootId,
}: _ExportRendererClientParamsModel): _ExportRendererClientModel => ({
  render: async ({ Page, pageProps, ...args }) => {
    // console.warn(args);
    const root = document.getElementById(rootId);

    const App: FCModel = () => render({ children: <Page {...pageProps} /> });
    AppRegistry.registerComponent('App', () => App);
    const { element } = AppRegistry.getApplication('App', {});

    root && hydrateRoot(root, element);
  },
});
