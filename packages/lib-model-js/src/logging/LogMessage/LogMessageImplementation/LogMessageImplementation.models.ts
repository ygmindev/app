import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type LogMessageImplementationModel = Pick<
  ResourceImplementationModel<LogMessageModel>,
  'subscribe'
>;
