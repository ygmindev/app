import { cleanup } from '@backend/server/setup/utils/cleanup/cleanup';
import { initialize } from '@backend/server/setup/utils/initialize/initialize';
import { server } from '@lib/backend/server/utils/server/server';
import { config } from '@lib/config/server/server';

const configF = config();
await initialize({ databaseConfig: configF.databaseConfig() });

await server({ ...config(), onClose: cleanup });
