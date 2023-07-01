import { config } from '#lib-config/core/setup/setup.node';
import { exportRendererServer } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer';
import { setup } from '#lib-shared/core/utils/setup/setup';

await setup({ onInitialize: config.onInitialize, onShutdown: config.onShutdown });

const { render } = exportRendererServer({});

export default render;
