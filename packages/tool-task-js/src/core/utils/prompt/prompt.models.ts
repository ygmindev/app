import {
  type _PromptModel,
  type _PromptParamsModel,
} from '@tool/task/core/utils/prompt/_prompt.models';
import { type PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export type PromptParamsModel<TType> = _PromptParamsModel<TType>;

export type PromptModel<TType> = _PromptModel<TType>;

export type PromptTypeModel = `${PROMPT_TYPE}`;

export type PromptArgsModel<TKey> = {
  isOptional?: boolean;
  key: TKey;
  message?: string;
  options?: Array<string | { label?: string; value: string }>;
};

export type ConfirmPromptArgsModel<TKey> = PromptArgsModel<TKey> & {
  basePath?: never;
  defaultValue?: boolean;
  type?: PROMPT_TYPE.CONFIRM;
};

export type StringPromptArgsModel<TKey> = PromptArgsModel<TKey> &
  (
    | { basePath?: string; defaultValue?: string; type?: PROMPT_TYPE.DIRECTORY }
    | { basePath?: never; defaultValue?: string; type?: PromptTypeModel }
  );

export type ArrayPromptArgsModel<TKey> = PromptArgsModel<TKey> & {
  basePath?: never;
  defaultValue?: Array<string>;
  type?: PROMPT_TYPE.MULTIPLE;
};
