import {
  type _HoverOutModel,
  type _HoverOutParamsModel,
} from '@lib/frontend/test/utils/hoverOut/_hoverOut.models';
import { fireEvent } from '@testing-library/react';

export const _hoverOut = (element: _HoverOutParamsModel): _HoverOutModel => {
  fireEvent.mouseUp(element as unknown as Element);
  fireEvent.mouseOut(element as unknown as Element);
  fireEvent.mouseLeave(element as unknown as Element);
  fireEvent.pointerOut(element as unknown as Element);
  fireEvent.pointerLeave(element as unknown as Element);
  fireEvent.focusOut(element as unknown as Element);
  return;
};
