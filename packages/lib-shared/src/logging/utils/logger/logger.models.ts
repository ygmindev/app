import { type _LoggerModel } from '@lib/shared/logging/utils/logger/_logger.models';

export type LogModel = (...params: Array<unknown>) => void;

export type LoggerModel = _LoggerModel;
