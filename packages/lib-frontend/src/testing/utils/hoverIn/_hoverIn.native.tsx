import { fireEvent } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import type { ReactTestInstance } from 'react-test-renderer';

export const _hoverIn = (element: ReactElement): void =>
  fireEvent(element as unknown as ReactTestInstance, 'pressIn');
