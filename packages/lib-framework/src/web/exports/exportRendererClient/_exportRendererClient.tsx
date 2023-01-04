import type {
  _ExportRendererClientModel,
  _ExportRendererClientParamsModel,
} from '@lib/framework/web/exports/exportRendererClient/_exportRendererClient.models';
import { hydrateRoot } from 'react-dom/client';

export const _exportRendererClient = ({
  rootId,
}: _ExportRendererClientParamsModel): _ExportRendererClientModel => ({
  render: async ({ Page, ...args }) => {
    console.warn(args);
    const element = document.getElementById(rootId);
    element && hydrateRoot(element, <Page />);
  },
});
