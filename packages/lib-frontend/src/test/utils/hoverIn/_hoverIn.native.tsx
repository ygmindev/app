import { fireEvent } from '@testing-library/react-native';
import { type ReactTestInstance } from 'react-test-renderer';

import {
  type _HoverInModel,
  type _HoverInParamsModel,
} from '#lib-frontend/test/utils/hoverIn/_hoverIn.models';

export const _hoverIn = (element: _HoverInParamsModel): _HoverInModel =>
  fireEvent(element as unknown as ReactTestInstance, 'pressIn');
