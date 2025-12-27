import { type OptionModel } from '@lib/model/resource/Option/Option.models';
import { type BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export type PromptModel<
  TType extends unknown,
  TKey extends StringKeyModel<TType>,
> = PromptBaseArgsModel<TKey> &
  (Required<TType>[TKey] extends Array<string | boolean>
    ? ArrayPromptArgsModel
    : Required<TType>[TKey] extends boolean
      ? ConfirmPromptArgsModel
      : Required<TType>[TKey] extends string
        ? StringPromptArgsModel
        : unknown);

export type PromptArrayModel<TType extends unknown> = Array<
  TType extends unknown
    ? PromptBaseArgsModel<string>
    : { [TKey in StringKeyModel<TType>]: PromptModel<TType, TKey> }[StringKeyModel<TType>]
>;

export type PromptBaseArgsModel<TKey extends string> = {
  basePath?: string | never;
  defaultValue?: Array<string | BOOLEAN_STRING>;
  isOptional?: boolean;
  key: TKey;
  message?: string;
  options?: Array<OptionModel>;
  type?: PROMPT_TYPE;
};

export type ConfirmPromptArgsModel = {
  basePath?: never;
  defaultValue?: Array<BOOLEAN_STRING>;
  type?: PROMPT_TYPE.CONFIRM;
};

export type StringPromptArgsModel =
  | {
      basePath?: string;
      defaultValue?: Array<string>;
      type?: PROMPT_TYPE.DIRECTORY;
    }
  | {
      basePath?: never;
      defaultValue?: Array<string>;
      type?: PROMPT_TYPE.INPUT;
    };

export type ArrayPromptArgsModel = {
  basePath?: never;

  defaultValue?: Array<string>;

  type?: PROMPT_TYPE.MULTIPLE;
};
