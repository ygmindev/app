import type { _DisplayModel } from '@lib/frontend/core/utils/display/_display.models';
import { useEffect, useLayoutEffect } from 'react';

const subscribeEvent = <TType extends Event>(
  eventName: string,
  cb: (event: TType) => void,
): void => {
  import.meta.env.SSR
    ? null
    : window.addEventListener(eventName as keyof WindowEventMap, cb as never);
};

const unsubscribeEvent = <TType extends Event>(
  eventName: string,
  cb: (event: TType) => void,
): void => {
  import.meta.env.SSR
    ? null
    : window.removeEventListener(eventName as keyof WindowEventMap, cb as never);
};

export const _display: _DisplayModel = {
  getDimension: () =>
    import.meta.env.SSR ? {} : { height: window.innerHeight, width: window.innerWidth },
  open: (uri, { height, onClose, onOpen, width }) => {
    const popup = window.open(
      uri,
      '_blank',
      `height=${height}, width=${width}, menubar=no, toolbar=no`,
    );
    if (popup) {
      popup.onload = (): void => onOpen && onOpen();
      popup.onunload = (): void => onClose && onClose();
    }
  },
  subscribeEvent,
  subscribeMessage: (cb) => subscribeEvent('message', cb),
  subscribeResize: (cb) => subscribeEvent('resize', cb),
  unsubscribeEvent,
  unsubscribeMessage: (cb) => unsubscribeEvent('message', cb),
  unsubscribeResize: (cb) => unsubscribeEvent('resize', cb),
  useLayoutEffect: import.meta.env.SSR ? useEffect : useLayoutEffect,
};
