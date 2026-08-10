import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  CONTENT_RESOURCE_NAME,
  ContentType,
} from '@lib/model/chat/utils/Content/Content.constants';
import { type ContentModel } from '@lib/model/chat/utils/Content/Content.models';

@withEntity({ name: CONTENT_RESOURCE_NAME })
export class Content implements ContentModel {
  @withField({ isOptional: true })
  content_type?: ContentType;

  @withField({ isOptional: true })
  value?: string;
}
