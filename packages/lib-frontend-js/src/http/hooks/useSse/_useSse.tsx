import {
  type _UseSseModel,
  type _UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/_useSse.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useCallback, useEffect, useRef, useState } from 'react';

export const _useSse = ({
  handlers,
  onError,
  uri: uriParams,
}: _UseSseParamsModel): _UseSseModel => {
  const listenersRef = useRef<Record<string, (e: MessageEvent) => void>>({});
  const esRef = useRef<EventSource>(null);
  const [isOpen, isOpenSet] = useState<boolean>(false);

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

  useEffect(() => {
    const url = uri(uriParams);
    const es = new EventSource(url);
    esRef.current = es;
    const listeners: Record<string, (e: MessageEvent) => void> = {};

    const doneListener = (): void => handleClose();
    es.addEventListener('done', doneListener);
    listeners['done'] = doneListener;

    for (const [k, v] of Object.entries(handlers ?? {})) {
      const listener = (event: MessageEvent): void => {
        try {
          v(JSON.parse(event.data) as never, handleClose);
        } catch (e) {
          console.error(e);

          onError?.(e as Error);
        }
      };
      listeners[k] = listener;
      es.addEventListener(k, listener);
    }

    listenersRef.current = listeners;

    es.onopen = (): void => isOpenSet(true);

    es.onerror = (e): void => {
      onError?.(e as unknown as Error);
      handleClose();
    };

    return handleClose;
  }, [JSON.stringify(uriParams)]);

  return { isOpen };
};
