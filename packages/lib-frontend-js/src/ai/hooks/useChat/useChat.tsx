import {
  type UseChatModel,
  type UseChatParamsModel,
} from '@lib/frontend/ai/hooks/useChat/useChat.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { LLM_PAYLOAD_TYPE, MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { useRef, useState } from 'react';

export const useChat = ({ url }: UseChatParamsModel): UseChatModel => {
  const [isStreaming, isStreamingSet] = useState<boolean>(false);
  const { post } = useHttp();
  const [currentMessage, currentMessageSet] = useState<Partial<MessageModel> | undefined>(
    undefined,
  );
  const currentMessageRef = useRef<Partial<MessageModel> | undefined>(undefined);
  const [currentChat, currentChatSet] = useState<Partial<ChatModel> | undefined>(undefined);
  const currentChatRef = useRef<Partial<ChatModel> | undefined>(undefined);
  const abortControllerRef = useRef<AbortController | undefined>(undefined);

  const buffer = useRef<string>('');
  const currentUser = useCurrentUser();

  const unsetCurrentMessage = (): void => {
    buffer.current = '';
    currentMessageRef.current = undefined;
    currentMessageSet(undefined);
    isStreamingSet(false);
  };

  const onMessage = (data: Partial<LlmPayloadModel>, messageType: string): void => {
    switch (data.type) {
      case LLM_PAYLOAD_TYPE.START: {
        buffer.current = data.content ?? '';
        currentChatRef.current = {
          ...currentChatRef.current,
          _id: data.chat_id,
        };
        currentMessageRef.current = {
          ...currentMessageRef.current,
          _id: data.message_id,
          chat: currentChatRef.current,
          content: buffer.current,
          created: new DateTime(data.created),
          role: data.role,
        };
        currentChatSet(currentChatRef.current);
        currentMessageSet({ ...currentMessageRef.current });
        break;
      }

      case LLM_PAYLOAD_TYPE.UPDATE: {
        buffer.current += data.content ?? '';
        currentMessageRef.current = {
          ...currentMessageRef.current,
          _id: data.message_id,
          content: buffer.current,
          created: new DateTime(data.created),
        };
        currentMessageSet({ ...currentMessageRef.current });
        break;
      }

      case LLM_PAYLOAD_TYPE.END: {
        currentChatRef.current = {
          ...currentChatRef.current,
          messages: [...(currentChatRef.current?.messages ?? []), { ...currentMessageRef.current }],
        };
        currentChatSet(currentChatRef.current);
        unsetCurrentMessage();
        break;
      }

      case LLM_PAYLOAD_TYPE.ERROR: {
        unsetCurrentMessage();
        break;
      }
    }
  };

  const subscribe = (data: Partial<MessageModel>): void => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();
    const userMessage: Partial<MessageModel> = {
      ...data,
      created: new DateTime(),
      createdBy: currentUser ?? {},
      role: MESSAGE_ROLE.USER,
    };
    isStreamingSet(true);
    currentChatRef.current = {
      ...currentChatRef.current,
      messages: [...(currentChatRef.current?.messages ?? []), userMessage],
    };
    currentChatSet(currentChatRef.current);
    buffer.current = '';

    void post({
      onMessage,
      params: data,
      request: {
        responseType: HTTP_RESPONSE_TYPE.STREAM,
        signal: abortControllerRef.current.signal,
      },
      url,
    });
  };

  const unsubscribe = (): void => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = undefined;
    unsetCurrentMessage();
    isStreamingSet(false);
  };

  return {
    chat: currentChat,
    currentMessage,
    isStreaming,
    subscribe,
    unsubscribe,
  };
};
