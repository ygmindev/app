import {
  type _PromptModel,
  type _PromptParamsModel,
} from '@tool/task/core/utils/prompt/_prompt.models';

export type PromptParamsModel<TType> = _PromptParamsModel<TType>;

export type PromptModel<TType> = _PromptModel<TType>;
