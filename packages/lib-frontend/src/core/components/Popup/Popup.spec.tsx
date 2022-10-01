import { Popup } from '@lib/frontend/core/components/Popup/Popup';
import type { PopupRefModel } from '@lib/frontend/core/components/Popup/Popup.models';
import { display } from '@lib/frontend/core/utils/display/display';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import { createRef } from 'react';

const URL = 'URL';
const popupRef = createRef<PopupRefModel>();

const { Component, displayName } = withTestComponent({
  defaultProps: {
    forwardedRef: popupRef,
  },
  target: Popup,
});

describe(displayName, () => {
  test('open', async () => {
    const spyOpen = jest.spyOn(display, 'open');
    render(<Component />);
    popupRef.current && popupRef.current.open(URL);
    expect(spyOpen).toHaveBeenCalled();
  });
});
