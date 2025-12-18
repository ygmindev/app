import { APP_TYPE } from '@lib/config/node/bundle/bundle.constants';
import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type _NodeDevModel,
  type _NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/_nodeDev.models';
import { createServer } from 'vite';
import { ViteNodeRunner } from 'vite-node/client';
import { viteNodeHmrPlugin } from 'vite-node/hmr';
import { ViteNodeServer } from 'vite-node/server';
import { installSourcemapsSupport } from 'vite-node/source-map';

export const _nodeDev = async ({ pathname }: _NodeDevParamsModel): Promise<_NodeDevModel> => {
  const config = bundleConfig.config({ appType: APP_TYPE.TOOL, entryFiles: [pathname] });
  const server = await createServer(
    merge(
      [{ plugins: [viteNodeHmrPlugin()], server: { hmr: false } }, config],
      MERGE_STRATEGY.DEEP_APPEND,
    ),
  );

  const node = new ViteNodeServer(server);
  installSourcemapsSupport({ getSourceMap: (source) => node.getSourceMap(source) });

  const runner = new ViteNodeRunner({
    base: server.config.base,
    fetchModule(id) {
      return node.fetchModule(id);
    },
    resolveId(id, importer) {
      return node.resolveId(id, importer);
    },
    root: server.config.root,
  });

  let cleannable: Pick<BootstrappableModel, 'cleanUp'>;

  const run = async (): Promise<void> => {
    await cleannable?.cleanUp?.();
    runner.moduleCache.clear();
    cleannable = await runner.executeFile(pathname);
  };

  server.watcher.on('change', async (file) => {
    const module = server.moduleGraph.getModuleById(file);
    if (!module) return;
    logger.debug(`file changed: ${file}`);
    runner.moduleCache.clear();
    await run();
  });

  await run();
};

// import { APP_TYPE } from '@lib/config/node/bundle/bundle.constants';
// import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
// import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
// import { merge } from '@lib/shared/core/utils/merge/merge';
// import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
// import {
//   type _NodeDevModel,
//   type _NodeDevParamsModel,
// } from '@tool/task/node/tasks/nodeDev/_nodeDev.models';
// import { createServer } from 'vite';
// import { ViteNodeRunner } from 'vite-node/client';
// import { createHotContext, handleMessage, viteNodeHmrPlugin } from 'vite-node/hmr';
// import { ViteNodeServer } from 'vite-node/server';
// import { installSourcemapsSupport } from 'vite-node/source-map';

// export const _nodeDev = async ({ pathname }: _NodeDevParamsModel): Promise<_NodeDevModel> => {
//   const config = bundleConfig.config({ appType: APP_TYPE.TOOL, entryFiles: [pathname] });
//   const server = await createServer(
//     merge(
//       [{ plugins: [viteNodeHmrPlugin()], server: { hmr: false } }, config],
//       MERGE_STRATEGY.DEEP_APPEND,
//     ),
//   );

//   await handleCleanup({ onCleanUp: async () => server.close() });

//   const node = new ViteNodeServer(server);

//   installSourcemapsSupport({ getSourceMap: (source) => node.getSourceMap(source) });

//   const runner = new ViteNodeRunner({
//     base: server.config.base,
//     createHotContext(runner, url) {
//       return createHotContext(runner, server.emitter, [pathname], url);
//     },
//     fetchModule(id) {
//       return node.fetchModule(id);
//     },
//     resolveId(id, importer) {
//       return node.resolveId(id, importer);
//     },
//     root: server.config.root,
//   });

//   server.emitter?.on('message', (payload) => {
//     void handleMessage(runner, server.emitter, [pathname], payload);
//   });

//   await runner.executeFile(pathname);
// };
