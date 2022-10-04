import {
  POPUP_DEFAULT_SIZE,
  POPUP_EVENT,
} from '@lib/frontend/core/components/Popup/Popup.constants';
import type { PopupPropsModel } from '@lib/frontend/core/components/Popup/Popup.models';
import { useUnmount } from '@lib/frontend/core/hooks/useUnmount/useUnmount';
import { display } from '@lib/frontend/core/utils/display/display';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import type { ReactElement } from 'react';
import { useImperativeHandle } from 'react';

export const Popup = <TParams = undefined,>({
  forwardedRef,
  height = POPUP_DEFAULT_SIZE,
  onClose,
  width = POPUP_DEFAULT_SIZE,
}: PopupPropsModel<TParams>): ReactElement<PopupPropsModel<TParams>> => {
  const _handleClose = onClose && debounce({ callback: onClose });

  const _handleMessage = (event: MessageEvent): void => {
    const { data, origin } = event;
    if (origin === APP_URI && data) {
      const { name, params } = data;
      if (name === POPUP_EVENT) {
        _handleClose && _handleClose(params);
      }
    }
  };

  useImperativeHandle(forwardedRef, () => ({
    open: (uri: string) => {
      display.subscribeMessage(_handleMessage);
      display.open(uri, { height, onClose: _handleClose, width });
    },
  }));

  useUnmount(() => {
    display.unsubscribeMessage(_handleMessage);
  });

  return <></>;
};
