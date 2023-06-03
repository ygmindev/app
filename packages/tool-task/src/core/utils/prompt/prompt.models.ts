import type { _PromptModel, _PromptParamsModel } from '@tool/task/core/utils/prompt/_prompt.models';
import type { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export type PromptParamsModel<TParams extends Array<PromptArgsModel>> = _PromptParamsModel<TParams>;

export type PromptModel<TParams extends Array<PromptArgsModel>> = _PromptModel<TParams>;

export type PromptTypeModel = `${PROMPT_TYPE}`;

export type PromptArgsModel = {
  isOptional?: boolean;
  key: string;
  message?: string;
  options?: Array<string>;
} & (
  | { basePath?: string; defaultValue?: string; type?: PROMPT_TYPE.DIRECTORY }
  | { basePath?: never; defaultValue?: Array<string>; type?: PROMPT_TYPE.CHECKBOX }
  | { basePath?: never; defaultValue?: string; type?: PromptTypeModel }
);
