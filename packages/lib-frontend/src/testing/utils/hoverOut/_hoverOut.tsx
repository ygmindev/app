import { fireEvent } from '@testing-library/react';
import type { ReactElement } from 'react';

export const _hoverOut = (element: ReactElement): unknown => {
  fireEvent.mouseUp(element as unknown as Element);
  fireEvent.mouseOut(element as unknown as Element);
  fireEvent.mouseLeave(element as unknown as Element);
  fireEvent.pointerOut(element as unknown as Element);
  fireEvent.pointerLeave(element as unknown as Element);
  fireEvent.focusOut(element as unknown as Element);
  return;
};
