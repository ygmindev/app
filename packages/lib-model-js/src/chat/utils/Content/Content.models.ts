import { type ContentType } from '@lib/model/chat/utils/Content/Content.constants';

export type ContentModel = {
  content_type?: ContentType;
  value?: string;
};
