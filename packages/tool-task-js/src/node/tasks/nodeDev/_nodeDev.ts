import { APP_TYPE } from '@lib/config/node/bundle/bundle.constants';
import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import {
  type _NodeDevModel,
  type _NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/_nodeDev.models';
import { createServer } from 'vite';
import { ViteNodeRunner } from 'vite-node/client';
import { ViteNodeServer } from 'vite-node/server';
import { installSourcemapsSupport } from 'vite-node/source-map';

export const _nodeDev = async ({ pathname }: _NodeDevParamsModel): Promise<_NodeDevModel> => {
  const config = bundleConfig.config({ appType: APP_TYPE.TOOL, watch: [pathname] });
  const server = await createServer(config);

  await handleCleanup({ onCleanUp: async () => server.close() });

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

  await runner.executeFile(pathname);
};
