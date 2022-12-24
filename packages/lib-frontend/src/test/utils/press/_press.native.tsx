import { fireEvent } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import type { ReactTestInstance } from 'react-test-renderer';

export const _press = (element: ReactElement): void =>
  fireEvent.press(element as unknown as ReactTestInstance);
