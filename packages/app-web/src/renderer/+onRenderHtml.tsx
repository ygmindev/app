import { setup } from '#app-web/core/utils/setup/setup';
import { exportRendererServer } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer';

const { render } = exportRendererServer({ setup });

export default render;
