import type { _HoverOutModel } from '@lib/frontend/test/utils/hoverOut/_hoverOut.models';
import { fireEvent } from '@testing-library/react-native';
import type { ReactTestInstance } from 'react-test-renderer';

export const _hoverOut: _HoverOutModel = (element) =>
  fireEvent(element as unknown as ReactTestInstance, 'pressOut');
