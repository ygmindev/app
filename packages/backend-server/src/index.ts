import { cleanup } from '@backend/server/setup/utils/cleanup/cleanup';
import { initialize } from '@backend/server/setup/utils/initialize/initialize';
import { runServer } from '@lib/backend/server/utils/runServer/runServer';
import { config } from '@lib/config/server/server';

const configF = config();

await runServer({
  ...configF,
  onClose: cleanup,
  onInitialize: async () => {
    await initialize({ databaseConfig: configF.databaseConfig() });
  },
});
