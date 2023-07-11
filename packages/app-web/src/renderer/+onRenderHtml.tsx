import { initialize } from '#app-web/setup/utils/initialize/initialize';
import { exportRendererServer } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer';

const { render } = exportRendererServer({ initialize });

export default render;
