import { fireEvent } from '@testing-library/react';
import type { ReactElement } from 'react';

export const _hoverIn = (element: ReactElement): unknown => {
  fireEvent.mouseDown(element as unknown as Element);
  fireEvent.mouseOver(element as unknown as Element);
  fireEvent.mouseEnter(element as unknown as Element);
  fireEvent.pointerOver(element as unknown as Element);
  fireEvent.pointerEnter(element as unknown as Element);
  fireEvent.focusIn(element as unknown as Element);
  return;
};
