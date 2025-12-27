import { type PromptModel } from '@lib/model/orchestrator/Prompt/Prompt.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export type _PromptParamsModel<TType> = Array<
  { [TKey in StringKeyModel<Required<TType>>]: PromptModel<TType, TKey> }[StringKeyModel<
    Required<TType>
  >]
>;

export type _PromptModel<TType> = TType;
