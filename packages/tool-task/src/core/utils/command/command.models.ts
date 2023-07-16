import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { type EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';
import {
  type _CommandModel,
  type _CommandParamsModel,
} from '#tool-task/core/utils/command/_command.models';

export type CommandParamsModel = _CommandParamsModel;

export type CommandModel = _CommandModel;

export type CommandOptionsModel = EnvironmentOverrideParamsModel & {
  isSilent?: boolean;
  onData?: CallablePromiseModel<void, string>;
  root?: string;
};
