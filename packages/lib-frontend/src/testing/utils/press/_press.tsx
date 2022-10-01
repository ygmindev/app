import { fireEvent } from '@testing-library/react';
import type { ReactElement } from 'react';

export const _press = (element: ReactElement): unknown =>
  fireEvent.click(element as unknown as Element);
