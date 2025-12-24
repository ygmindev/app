import {
  type _UseSseModel,
  type _UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/_useSse.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useEffect, useRef, useState } from 'react';

export const _useSse = ({
  closeEvents,
  handlers,
  onError,
  uri: uriParams,
}: _UseSseParamsModel): _UseSseModel => {
  const handlersRef = useRef(handlers);
  const onErrorRef = useRef(onError);
  const [isOpen, isOpenSet] = useState<boolean>(false);

  useEffect(() => {
    handlersRef.current = handlers;
    onErrorRef.current = onError;
  }, [handlers, onError]);

  useEffect(() => {
    const url = uri(uriParams);
    const es = new EventSource(url);
    const listeners: Record<string, (e: MessageEvent) => void> = {};
    for (const [k, v] of Object.entries(handlersRef.current ?? {})) {
      const listener = (event: MessageEvent): void => {
        try {
          v(JSON.parse(event.data) as never);
          if (closeEvents?.includes(k)) {
            isOpenSet(false);
            es.close();
          }
        } catch (e) {
          onErrorRef.current?.(e as Error);
        }
      };
      listeners[k] = listener;
      es.addEventListener(k, listener);
    }
    es.onerror = (e) => {
      isOpenSet(false);
      onErrorRef.current?.(e as unknown as Error);
    };
    es.onopen = () => isOpenSet(true);

    return () => {
      isOpenSet(false);
      es.close();
      for (const [k, v] of Object.entries(listeners)) {
        es.removeEventListener(k, v);
      }
    };
  }, [JSON.stringify(uriParams)]);

  return { isOpen };
};
