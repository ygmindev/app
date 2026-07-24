import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';

export type ChatPagePropsModel = {};

export type ChatPageParamsModel = {
  chatId: string;
};

export type ChatPageLoadersModel = Record<string, Partial<ChatModel> | undefined>;
