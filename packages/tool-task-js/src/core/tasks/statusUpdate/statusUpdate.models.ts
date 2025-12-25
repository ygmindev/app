import { type LOG_MESSAGE_TYPE } from '@lib/model/logging/LogMessage/LogMessage.constants';

export type StatusUpdateParamsModel = {
  id: string;
  type: LOG_MESSAGE_TYPE;
};

export type StatusUpdateModel = void;
