import {
  type UseChatModel,
  type UseChatParamsModel,
} from '@lib/frontend/ai/hooks/useChat/useChat.models';
import { useChatResource } from '@lib/frontend/chat/hooks/useChatResource/useChatResource';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { CHAT } from '@lib/shared/chat/chat.constants';
import { ObjectId } from '@lib/shared/data/utils/ObjectId/ObjectId';
import { useCallback, useRef } from 'react';

export const useChat = ({ chatId }: UseChatParamsModel): UseChatModel => {
  const isNew = chatId === undefined;
  const fallback = useRef<string | null>(null);
  const chatIdF = chatId ?? (fallback.current ??= new ObjectId().toString());

  const { get } = useChatResource();
  const { data: chat, setData: setChat } = useQuery(
    `${CHAT}.${chatIdF}`,
    async () => {
      if (isNew) return { _id: chatIdF };
      return (await get({ filter: [{ field: '_id', value: chatIdF }] })).result;
    },
    undefined,
    { initialData: { _id: chatIdF } },
  );

  const addMessage = useCallback(
    (message: Partial<MessageModel>) => {
      void setChat((prev) => ({
        ...prev,
        messages: [...(prev?.messages ?? []), message],
      }));
    },
    [chatIdF],
  );

  return {
    addMessage,
    chat: chat ?? undefined,
  };
};
