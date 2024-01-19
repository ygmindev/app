import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type ChatModel = EntityResourceModel & {
  name?: string;
};

export type ChatFormModel = EntityResourceDataModel<ChatModel>;
