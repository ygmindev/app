import type { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import type { PromptTypeModel } from '@tool/task/core/utils/prompt/prompt.models';

export type _PromptParamsModel<TType extends Record<string, string>> = Array<
  {
    defaultValue?: string | Array<string>;
    isOptional?: boolean;
    key: keyof TType;
    message?: string;
    options?: Array<string>;
  } & (
    | { basePath?: string; type?: PROMPT_TYPE.DIRECTORY }
    | { basePath?: never; type?: PromptTypeModel }
  )
>;

export type _PromptModel<TType extends Record<string, string>> = Promise<TType>;
