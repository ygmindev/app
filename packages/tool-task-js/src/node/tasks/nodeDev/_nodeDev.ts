import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import {
  type _NodeDevModel,
  type _NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/_nodeDev.models';
import { createServer } from 'vite';
import { ViteNodeRunner } from 'vite-node/client';
import { createHotContext, handleMessage, viteNodeHmrPlugin } from 'vite-node/hmr';
import { ViteNodeServer } from 'vite-node/server';
import { installSourcemapsSupport } from 'vite-node/source-map';

export const _nodeDev = async ({ pathname }: _NodeDevParamsModel): Promise<_NodeDevModel> => {
  const config = bundleConfig.config();
  const server = await createServer({
    ...config,
    plugins: filterNil([process.env.NODE_ENV === 'development' && viteNodeHmrPlugin()]),
  });

  await handleCleanup({ onCleanUp: async () => server.close() });

  const node = new ViteNodeServer(server);

  installSourcemapsSupport({ getSourceMap: (source) => node.getSourceMap(source) });

  const runner = new ViteNodeRunner({
    base: server.config.base,
    createHotContext(runner, url) {
      return createHotContext(runner, server.emitter, [pathname], url);
    },
    fetchModule(id) {
      return node.fetchModule(id);
    },
    resolveId(id, importer) {
      return node.resolveId(id, importer);
    },
    root: server.config.root,
  });

  server.emitter?.on('message', (payload) =>
    handleMessage(runner, server.emitter, [pathname], payload),
  );

  await runner.executeFile(pathname);
};
