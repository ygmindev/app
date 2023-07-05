import { _config } from '#lib-config/core/setup/setup.node';
import { exportRendererServer } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer';

await _config.setup();

const { render } = exportRendererServer({});

export default render;
