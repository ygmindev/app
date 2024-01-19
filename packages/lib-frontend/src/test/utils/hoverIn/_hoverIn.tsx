import {
  type _HoverInModel,
  type _HoverInParamsModel,
} from '@lib/frontend/test/utils/hoverIn/_hoverIn.models';
import { fireEvent } from '@testing-library/react';

export const _hoverIn = (element: _HoverInParamsModel): _HoverInModel => {
  fireEvent.mouseDown(element as unknown as Element);
  fireEvent.mouseOver(element as unknown as Element);
  fireEvent.mouseEnter(element as unknown as Element);
  fireEvent.pointerOver(element as unknown as Element);
  fireEvent.pointerEnter(element as unknown as Element);
  fireEvent.focusIn(element as unknown as Element);
  return;
};
