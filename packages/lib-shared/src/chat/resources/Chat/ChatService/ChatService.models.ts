import {
  type ChatFormModel,
  type ChatModel,
} from '@lib/shared/chat/resources/Chat/Chat.models';
import { type EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type ChatServiceModel = EntityResourceServiceModel<
  ChatModel,
  ChatFormModel,
>;
