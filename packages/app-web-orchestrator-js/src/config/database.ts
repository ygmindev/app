import { databaseConfig as configBase } from '@lib/config/database/database.mongo';
import { Pipeline } from '@lib/model/orchestrator/Pipeline/Pipeline';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';

let databaseConfig = configBase;

databaseConfig = databaseConfig.extend(() => ({
  entities: [Workflow, Pipeline],
}));

export { databaseConfig };
