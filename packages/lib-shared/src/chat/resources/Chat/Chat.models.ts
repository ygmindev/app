import { type SESSION_RESOURCE_NAME } from '#lib-shared/chat/resources/Session/Session.constants';
import { type SessionModel } from '#lib-shared/chat/resources/Session/Session.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type ChatModel = EntityResourceModel & {
  [SESSION_RESOURCE_NAME]?: Array<SessionModel>;

  name?: string;
};

export type ChatFormModel = EntityResourceDataModel<ChatModel>;
