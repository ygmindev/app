import { exportRendererServer } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer';

const { onBeforeRender, passToClient, render } = exportRendererServer();

export { onBeforeRender, passToClient, render };
