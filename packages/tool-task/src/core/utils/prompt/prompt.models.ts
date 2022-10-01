import type { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export type PromptTypeModel = `${PROMPT_TYPE}`;

export type PromptParamsModel<TType extends Record<string, string>> =
  | {
      defaultValue?: string | Array<string>;
      isOptional?: boolean;
      key: keyof TType;
      message?: string;
      options?: Array<string>;
    } & (
      | {
          basePath?: string;
          type?: PROMPT_TYPE.DIRECTORY;
        }
      | {
          basePath?: never;
          type?: PromptTypeModel;
        }
    );
