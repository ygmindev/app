import type { _PromptModel, _PromptParamsModel } from '@tool/task/core/utils/prompt/_prompt.models';
import type { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export type PromptParamsModel<TType extends Record<string, string>> = _PromptParamsModel<TType>;

export type PromptModel<TType extends Record<string, string>> = _PromptModel<TType>;

export type PromptTypeModel = `${PROMPT_TYPE}`;
