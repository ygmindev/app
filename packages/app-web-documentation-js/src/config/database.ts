import { databaseConfig as configBase } from '@lib/config/database/database.mongo';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';

export const databaseConfig = configBase.extend(() => ({
  entities: [Workflow],
}));
