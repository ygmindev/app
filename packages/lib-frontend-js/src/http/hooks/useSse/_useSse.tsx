import {
  type _UseSseModel,
  type _UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/_useSse.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useCallback, useEffect, useRef, useState } from 'react';

export const _useSse = ({
  handlers,
  isActive = false,
  onError,
  uri: uriParams,
}: _UseSseParamsModel): _UseSseModel => {
  const listenersRef = useRef<Record<string, (e: MessageEvent) => void>>({});
  const esRef = useRef<EventSource>(null);
  const [isOpen, isOpenSet] = useState<boolean>(false);

  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  const handleClose = useCallback((): void => {
    if (!esRef.current) return;
    for (const [k, v] of Object.entries(listenersRef.current)) {
      esRef.current.removeEventListener(k, v);
    }
    listenersRef.current = {};
    esRef.current.close();
    esRef.current = null;
    isOpenSet(false);
  }, []);

  const handleOpen = useCallback((): void => {
    if (esRef.current) handleClose(); // 👈 prevent double-connections

    const url = uri(uriParams);
    const es = new EventSource(url);
    esRef.current = es;
    const listeners: Record<string, (e: MessageEvent) => void> = {};

    const doneListener = (): void => handleClose();
    es.addEventListener('done', doneListener);
    listeners['done'] = doneListener;

    for (const [k, v] of Object.entries(handlersRef.current ?? {})) {
      const listener = (event: MessageEvent): void => {
        try {
          v(JSON.parse(event.data) as never, handleClose);
        } catch (e) {
          console.error(e);
          onErrorRef.current?.(e as Error);
        }
      };
      listeners[k] = listener;
      es.addEventListener(k, listener);
    }

    listenersRef.current = listeners;
    es.onopen = (): void => isOpenSet(true);
    es.onerror = (e): void => {
      onErrorRef.current?.(e as unknown as Error);
      handleClose();
    };
  }, [JSON.stringify(uriParams), handleClose]);

  useEffect(() => {
    if (!isActive) return;
    handleOpen();
    return handleClose;
  }, [isActive, handleOpen]);

  return { isOpen, subscribe: handleOpen, unsubscribe: handleClose };
};
