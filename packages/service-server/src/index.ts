import { cleanup } from '@service/server/setup/utils/cleanup/cleanup';
import { initialize } from '@service/server/setup/utils/initialize/initialize';
import { runServer } from '@lib/backend/server/utils/runServer/runServer';
import serverConfig from '@lib/config/node/server/server';

const configF = serverConfig.params();

await runServer({
  ...configF,
  onClose: cleanup,
  onInitialize: async () => {
    await initialize({ database: configF.database });
  },
});
