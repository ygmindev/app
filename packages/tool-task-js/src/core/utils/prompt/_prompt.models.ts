
import {
  type ArrayPromptArgsModel,
  type ConfirmPromptArgsModel,
  type StringPromptArgsModel,
} from '@tool/task/core/utils/prompt/prompt.models';

export type _PromptParamsModel<TType> = Array<
  {
    [TKey in keyof Required<TType>]: Required<TType>[TKey] extends Array<string | boolean>
      ? ArrayPromptArgsModel<TKey>
      : Required<TType>[TKey] extends boolean
        ? ConfirmPromptArgsModel<TKey>
        : Required<TType>[TKey] extends string
          ? StringPromptArgsModel<TKey>
          : never;
  }[keyof Required<TType>]
>;

export type _PromptModel<TType> = TType;
