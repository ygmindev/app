import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type _NodeDevModel,
  type _NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/_nodeDev.models';
import { createServer } from 'vite';
import { ViteNodeRunner } from 'vite-node/client';
import { ViteNodeServer } from 'vite-node/server';
import { installSourcemapsSupport } from 'vite-node/source-map';

export const _nodeDev = async ({ pathname }: _NodeDevParamsModel): Promise<_NodeDevModel> => {
  const config = bundleConfig.config();
  const server = await createServer({ ...config });
  const node = new ViteNodeServer(server);

  installSourcemapsSupport({ getSourceMap: (source) => node.getSourceMap(source) });

  server.watcher.on('change', async (file) => {
    logger.info(`file changed: ${file}`);
    try {
      await runner.executeFile(pathname);
    } catch (err) {
      logger.fail(err);
    }
  });

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

  try {
    await runner.executeFile(pathname);
  } finally {
    await server.close();
  }
};
