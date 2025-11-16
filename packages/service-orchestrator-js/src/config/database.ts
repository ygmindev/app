import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { config as configBase } from '@lib/config/database/database.mongo';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';

export const config = defineConfig<DatabaseConfigModel, _DatabaseConfigModel>({
  ...configBase,

  overrides: () => [
    {
      entities: [Workflow],
    },
  ],
});
