import { databaseConfig as configBase } from '@lib/config/database/database.mongo';
import { Job } from '@lib/model/orchestrator/Job/Job.entity';
import { Pipeline } from '@lib/model/orchestrator/Pipeline/Pipeline';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';

export const databaseConfig = configBase.extend(() => ({
  entities: [Pipeline, Workflow, Job],
}));
