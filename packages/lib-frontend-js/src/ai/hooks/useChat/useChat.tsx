import {
  type UseChatModel,
  type UseChatParamsModel,
} from '@lib/frontend/ai/hooks/useChat/useChat.models';
import { type ChatStreamModel } from '@lib/frontend/chat/stores/chatStore/chatStore.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { LLM_PAYLOAD_TYPE, MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { ObjectId } from '@lib/shared/data/utils/ObjectId/ObjectId';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { useCallback, useRef } from 'react';

const streamMap = new Map<
  string,
  {
    controller: AbortController;
    promise: Promise<Partial<LlmPayloadModel> | null>;
  }
>();

export const useChat = ({
  chatId,
  onStart,
  onSubscribe,
  url,
}: UseChatParamsModel): UseChatModel => {
  const { post } = useHttp();
  const currentUser = useCurrentUser();
  const chatIdRef = useRef<string>(chatId ?? new ObjectId().toString());
  const { merge: chatsMerge } = useStore('chat.chats');
  const { get: getChat, value: chat } = useStore(`chat.chats.${chatIdRef.current}`);
  const actions = useActions();

  const subscribe = useCallback(
    (data: Partial<MessageModel>) => {
      const key = chatIdRef.current;
      if (streamMap.has(key)) return;
      const stream: Partial<ChatStreamModel> = {
        _id: key,
        currentMessage: undefined,
        messages: [
          {
            _id: new ObjectId().toString(),
            content: data.content,
            createdBy: currentUser ?? {},
            role: MESSAGE_ROLE.USER,
          },
        ],
      };
      onSubscribe?.(stream);
      chatsMerge({ [key]: stream }, MERGE_STRATEGY.DEEP_APPEND);

      const controller = new AbortController();
      const promise = post({
        onMessage: (data: Partial<LlmPayloadModel>): void => {
          const key = chatIdRef.current;
          const { chat_id, content, message_id, role, type } = data;

          if (!chat_id) throw new NotFoundError('chat id');
          if (!message_id) throw new NotFoundError('message id');
          if (chat_id !== key) {
            streamMap.get(key)?.controller.abort();
            streamMap.delete(key);
            throw new Error(`chat_id_mismatch: expected ${key}, got ${chat_id}`);
          }

          switch (type) {
            case LLM_PAYLOAD_TYPE.START: {
              chatsMerge({
                [key]: {
                  _id: key,
                  currentMessage: {
                    _id: message_id,
                    content: content ?? '',
                    role,
                    status: MESSAGE_STATUS.STREAMING,
                  },
                },
              });
              onStart?.(data);
              break;
            }

            case LLM_PAYLOAD_TYPE.UPDATE: {
              const currentMessage = getChat()?.currentMessage;
              if (!currentMessage) return;
              chatsMerge({
                [key]: {
                  _id: key,
                  currentMessage: {
                    content: (currentMessage.content ?? '') + (content ?? ''),
                  },
                },
              });
              break;
            }

            case LLM_PAYLOAD_TYPE.END: {
              const currentMessage = getChat()?.currentMessage;
              if (!currentMessage) return;
              actions?.chat.streamEnd({ chatId: key });
              break;
            }

            case LLM_PAYLOAD_TYPE.ERROR: {
              chatsMerge({
                [key]: {
                  _id: key,
                  currentMessage: undefined,
                },
              });
              break;
            }
          }
        },
        params: { ...data, chat: { _id: key } },
        request: { responseType: HTTP_RESPONSE_TYPE.STREAM, signal: controller.signal },
        url,
      }).finally(() => {
        streamMap.delete(key);
      });

      streamMap.set(key, { controller, promise });
    },
    [currentUser, chatsMerge, post, url],
  );

  const unsubscribe = useCallback((): void => {
    const key = chatIdRef.current;
    streamMap.get(key)?.controller.abort();
    streamMap.delete(key);
    chatsMerge({
      [key]: {
        _id: key,
        currentMessage: undefined,
      },
    });
  }, [chatsMerge]);

  return {
    chat,
    currentMessage: chat?.currentMessage,
    isStreaming: chat?.currentMessage?.status === MESSAGE_STATUS.STREAMING,
    subscribe,
    unsubscribe,
  };
};
