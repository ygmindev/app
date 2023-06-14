import { fireEvent } from '@testing-library/react-native';
import type { ReactTestInstance } from 'react-test-renderer';

import type {
  _HoverOutModel,
  _HoverOutParamsModel,
} from '#lib-frontend/test/utils/hoverOut/_hoverOut.models';

export const _hoverOut = (element: _HoverOutParamsModel): _HoverOutModel =>
  fireEvent(element as unknown as ReactTestInstance, 'pressOut');
