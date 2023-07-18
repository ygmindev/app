import {
  type ArrayPromptArgsModel,
  type StringPromptArgsModel,
} from '#tool-task/core/utils/prompt/prompt.models';

export type _PromptParamsModel<TType> = Array<
  {
    [TKey in keyof TType]: TType[TKey] extends Array<string>
      ? ArrayPromptArgsModel<TKey>
      : TType[TKey] extends string
      ? StringPromptArgsModel<TKey>
      : never;
  }[keyof TType]
>;

export type _PromptModel<TType> = TType;
