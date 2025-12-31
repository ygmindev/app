import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { withDir } from '@lib/backend/file/utils/withDir/withDir';
import { APP_TYPE } from '@lib/config/node/bundle/bundle.constants';
import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
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
  const entryFiles = isArray(pathname) ? pathname : [pathname];
  const config = bundleConfig.config({ appType: APP_TYPE.TOOL, entryFiles });
  const root = fromWorking();
  const server = await createServer(
    merge(
      [{ plugins: [viteNodeHmrPlugin()], root, server: { hmr: false } }, config],
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
    root,
  });

  let cleannable: Array<Pick<BootstrappableModel, 'cleanUp'>> = [];

  const runAll = async (): Promise<void> => {
    await Promise.all(cleannable.map(async (p) => p?.cleanUp?.()));
    runner.moduleCache.clear();
    cleannable = await Promise.all(entryFiles.map(async (v) => runner.executeFile(v)));
  };

  server.watcher.on('change', async (file) => {
    const module = server.moduleGraph.getModuleById(file);
    if (!module) return;
    logger.debug(`file changed: ${file}`);
    runner.moduleCache.clear();
    await withDir(root, runAll);
  });

  await withDir(root, runAll);
};
