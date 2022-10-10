import type { _DisplayModel } from '@lib/frontend/core/utils/display/_display.models';
import { useEffect, useLayoutEffect } from 'react';

export const _display: _DisplayModel = {
  getDimension: () => (__IS_SSR__ ? {} : { height: window.innerHeight, width: window.innerWidth }),
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
  subscribeMessage: (cb) => (__IS_SSR__ ? null : window.addEventListener('message', cb)),
  subscribeResize: (cb) => (__IS_SSR__ ? null : window.addEventListener('resize', cb)),
  unsubscribeMessage: (cb) => (__IS_SSR__ ? null : window.removeEventListener('message', cb)),
  unsubscribeResize: (cb) => (__IS_SSR__ ? null : window.removeEventListener('resize', cb)),
  useLayoutEffect: __IS_SSR__ ? useEffect : useLayoutEffect,
};
