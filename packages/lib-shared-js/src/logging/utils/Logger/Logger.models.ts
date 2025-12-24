import { type _LoggerModel } from '@lib/shared/logging/utils/Logger/_Logger.models';

export type LoggerModel = _LoggerModel & {
  fail: (params: LogArgsModel, ...rest: Array<LogArgsModel>) => void;
  progress: (params: LogArgsModel, ...rest: Array<LogArgsModel>) => void;
  success: (params: LogArgsModel, ...rest: Array<LogArgsModel>) => void;
};

export type LogArgsModel = string | Error | Record<string, unknown>;
