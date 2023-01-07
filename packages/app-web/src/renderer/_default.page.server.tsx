import { exportRendererServer } from '@lib/framework/web/exports/exportRendererServer/exportRendererServer';

const { passToClient, render } = exportRendererServer();

export { passToClient, render };
