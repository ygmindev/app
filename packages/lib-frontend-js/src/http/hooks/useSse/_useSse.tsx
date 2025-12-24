import {
  type _UseSseModel,
  type _UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/_useSse.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useEffect, useRef, useState } from 'react';

export const _useSse = ({
  handlers,
  onError,
  uri: uriParams,
}: _UseSseParamsModel): _UseSseModel => {
  const listenersRef = useRef<Record<string, (e: MessageEvent) => void>>({});
  const esRef = useRef<EventSource>(null);
  const [isOpen, isOpenSet] = useState<boolean>(false);

  const handleClose = (): void => {
    isOpenSet(false);
    esRef.current?.close();
    for (const [k, v] of Object.entries(listenersRef.current)) {
      esRef.current?.removeEventListener(k, v);
    }
  };

  useEffect(() => {
    const url = uri(uriParams);
    esRef.current = new EventSource(url);
    const listeners: Record<string, (e: MessageEvent) => void> = {};
    for (const [k, v] of Object.entries(handlers ?? {})) {
      const listener = (event: MessageEvent): void => {
        try {
          v(JSON.parse(event.data) as never, handleClose);
        } catch (e) {
          onError?.(e as Error);
        }
      };
      listeners[k] = listener;
      esRef.current?.addEventListener(k, listener);
    }
    esRef.current.onerror = (e) => {
      isOpenSet(false);
      onError?.(e as unknown as Error);
    };
    esRef.current.onopen = () => isOpenSet(true);

    return handleClose;
  }, [JSON.stringify(uriParams)]);

  return { isOpen };
};
