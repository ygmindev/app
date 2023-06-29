import { _prompt } from '#tool-task/core/utils/prompt/_prompt';
import {
  type PromptArgsModel,
  type PromptModel,
  type PromptParamsModel,
} from '#tool-task/core/utils/prompt/prompt.models';

export const prompt = async <TParams extends Array<PromptArgsModel>>(
  params: PromptParamsModel<TParams>,
): PromptModel<TParams> => _prompt(params);
