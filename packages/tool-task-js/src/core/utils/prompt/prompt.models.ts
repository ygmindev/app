import {
  type _PromptModel,
  type _PromptParamsModel,
} from '@tool/task/core/utils/prompt/_prompt.models';

export type PromptParamsModel<TType extends unknown> = _PromptParamsModel<TType>;

export type PromptModel<TType extends unknown> = _PromptModel<TType>;
