import { fireEvent } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import type { ReactTestInstance } from 'react-test-renderer';

export const _hoverOut = (element: ReactElement): unknown =>
  fireEvent(element as unknown as ReactTestInstance, 'pressOut');
