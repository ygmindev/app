import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { Resource } from '@lib/model/resource/Resource/Resource';
import { LOGGING_LEVEL } from '@lib/shared/logging/logging.constants';

@withEntity({
  name: LOG_MESSAGE_RESOURCE_NAME,
})
export class LogMessage extends Resource({ isDatabase: false }) implements LogMessageModel {
  @withField({
    Resource: () => Date,
    defaultValue: () => new Date(),
    isOptional: true,
  })
  created?: Date;

  @withField({ isOptional: true })
  level?: LOGGING_LEVEL;

  @withField()
  message!: string;

  @withField({ isOptional: true })
  ns?: string;
}
