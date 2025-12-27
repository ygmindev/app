import { type PromptArrayModel } from '@lib/model/orchestrator/Prompt/Prompt.models';

export type _PromptParamsModel<TType extends unknown> = PromptArrayModel<TType>;

export type _PromptModel<TType extends unknown> = TType;
