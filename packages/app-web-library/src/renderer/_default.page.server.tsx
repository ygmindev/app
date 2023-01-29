import { exportRendererServer } from '@lib/framework/web/exports/exportRendererServer/exportRendererServer';

const { onBeforeRender, passToClient, render } = exportRendererServer();

export { onBeforeRender, passToClient, render };
