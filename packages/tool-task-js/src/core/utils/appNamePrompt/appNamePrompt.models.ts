import { type PromptArrayModel } from '@lib/model/orchestrator/Prompt/Prompt.models';
import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type AppNamePromptParamsModel = {
  defaultValue?: string;
  prefix: string;
};

export type AppNamePromptModel = PromptArrayModel<AppTaskParamsModel>[number];
