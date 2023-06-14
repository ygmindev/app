import type {
  _CommandModel,
  _CommandParamsModel,
} from '#tool-task/core/utils/command/_command.models';

export type CommandParamsModel = _CommandParamsModel;

export type CommandModel = _CommandModel;

export interface CommandOptionsModel {
  isSilent?: boolean;
  onData?(value: string): void;
  root?: string;
}
