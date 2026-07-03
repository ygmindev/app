import {
  type UseChatModel,
  type UseChatParamsModel,
} from '@lib/frontend/ai/hooks/useChat/useChat.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { LLM_PAYLOAD_TYPE, MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { ObjectId } from '@lib/shared/data/utils/ObjectId/ObjectId';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { useCallback, useRef } from 'react';

const controllerMap = new Map<string, AbortController>();

const chatControllers = {
  delete: (key: string) => controllerMap.delete(key),
  get: (key: string) => controllerMap.get(key),
  rekey: (from: string, to: string) => {
    const controller = controllerMap.get(from);
    if (!controller) return;
    controllerMap.set(to, controller);
    controllerMap.delete(from);
  },
  set: (key: string, controller: AbortController) => controllerMap.set(key, controller),
};

export const useChat = ({ chatId }: UseChatParamsModel): UseChatModel => {
  const { post } = useHttp();
  const currentUser = useCurrentUser();

  const ref = useRef<string>(chatId ?? new ObjectId().toString());

  const chat = useStore('chat.chats');

  const handleFrame = useCallback(
    (data: Partial<LlmPayloadModel>, resolve: () => void, reject: (e: Error) => void) => {
      let key = ref.current;

      if (data.type === LLM_PAYLOAD_TYPE.START && data.chat_id && data.chat_id !== key) {
        // /chat/new resolved to a real id — rekey redux state + controller,
        // no cache-identity conflict because mutationKey isn't state, just a label
        dispatch(chatRekeyed({ realId: data.chat_id, tempId: key }));
        chatControllers.rekey(key, data.chat_id);
        ref.current = data.chat_id;
        key = data.chat_id;
      }

      switch (data.type) {
        case LLM_PAYLOAD_TYPE.START:
          dispatch(
            streamStarted({
              chatId: key,
              message: {
                _id: data.message_id,
                content: data.content ?? '',
                created: new DateTime(data.created),
                role: data.role,
                status: MESSAGE_STATUS.STREAMING,
              } as MessageModel,
            }),
          );
          break;

        case LLM_PAYLOAD_TYPE.UPDATE:
          dispatch(streamUpdated({ chatId: key, content: data.content ?? '' }));
          break;

        case LLM_PAYLOAD_TYPE.END:
          dispatch(streamCompleted({ chatId: key }));
          resolve();
          break;

        case LLM_PAYLOAD_TYPE.ERROR:
          dispatch(streamErrored({ chatId: key }));
          reject(new Error('stream_error'));
          break;
      }
    },
    [dispatch],
  );

  const mutation = useMutation({
    mutationFn: (data: Partial<MessageModel>) => {
      const key = ref.current;
      const controller = new AbortController();
      chatControllers.set(key, controller);

      const url = chatId ? `/chat/${chatId}` : '/chat/new';

      return new Promise<void>((resolve, reject) => {
        void post({
          onMessage: (frame: Partial<LlmPayloadModel>) => handleFrame(frame, resolve, reject),
          params: data,
          request: { responseType: HTTP_RESPONSE_TYPE.STREAM, signal: controller.signal },
          url,
        }).catch(reject);
      }).finally(() => {
        chatControllers.delete(ref.current);
      });
    },
    // label only — not a cache key, so the temp->real rekey mid-flight is harmless
    mutationKey: ['chatStream', ref.current],
  });

  const subscribe = useCallback(
    (data: Partial<MessageModel>) => {
      const key = ref.current;
      if (chatControllers.get(key)) return; // already streaming this chat

      dispatch(
        messagePosted({
          chatId: key,
          message: {
            ...data,
            _id: uid(),
            created: new DateTime(),
            createdBy: currentUser ?? {},
            role: MESSAGE_ROLE.USER,
          } as MessageModel,
        }),
      );

      mutation.mutate(data);
    },
    [currentUser, dispatch, mutation],
  );

  const unsubscribe = useCallback(() => {
    const key = ref.current;
    chatControllers.get(key)?.abort();
    chatControllers.delete(key);
    dispatch(streamErrored({ chatId: key }));
  }, [dispatch]);

  return {
    chat,
    chatId: chat?._id ?? ref.current,
    currentMessage: chat?.currentMessage,
    error: mutation.error,
    isStreaming: chat?.isStreaming ?? mutation.isPending,
    subscribe,
    unsubscribe,
  };
};
