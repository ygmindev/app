import { type _LoggerModel } from '@lib/shared/logging/utils/Logger/_Logger.models';

export type LoggerModel = _LoggerModel;

export type LogArgsModel = string | Error | Record<string, unknown>;
