import { databaseConfig as configBase } from '@lib/config/database/database.mongo';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';

let databaseConfig = configBase;

databaseConfig = databaseConfig.extend(() => ({
  entities: [Workflow],
}));

export { databaseConfig };
