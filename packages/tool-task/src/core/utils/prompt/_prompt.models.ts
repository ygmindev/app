import type { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import type { PromptArgsModel } from '#tool-task/core/utils/prompt/prompt.models';

export type _PromptParamsModel<TParams extends Array<PromptArgsModel>> = TParams;

export type _PromptModel<TParams extends Array<PromptArgsModel>> = Promise<{
  [TKey in TParams[number]['key']]: TParams[number]['type'] extends PROMPT_TYPE.CHECKBOX
    ? Array<string>
    : string;
}>;
