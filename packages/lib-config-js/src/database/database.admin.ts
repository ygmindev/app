import { databaseConfig as configBase } from '@lib/config/database/database.base';
import { Utility } from '@lib/model/admin/Utility/Utility.entity';
import { Vendor } from '@lib/model/admin/Vendor/Vendor.entity';
import { LogMessage } from '@lib/model/logging/LogMessage/LogMessage.entity';
import { Job } from '@lib/model/orchestrator/Job/Job.entity';
import { Pipeline } from '@lib/model/orchestrator/Pipeline/Pipeline';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';

export const databaseConfig = configBase.extend(() => ({
  entities: [Job, LogMessage, Pipeline, Utility, Vendor, Workflow],
}));
