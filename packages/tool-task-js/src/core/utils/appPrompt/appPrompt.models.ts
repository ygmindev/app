import { type PromptArrayModel } from '@lib/model/orchestrator/Prompt/Prompt.models';
import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type AppPromptParamsModel = {
  defaultValue?: string;
  isMultiple?: boolean;
  key?: string;
  patterns?: Array<RegExp>;
};

export type AppPromptModel = PromptArrayModel<AppTaskParamsModel>[number];
