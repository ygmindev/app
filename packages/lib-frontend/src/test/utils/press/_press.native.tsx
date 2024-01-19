import {
  type _PressModel,
  type _PressParamsModel,
} from '@lib/frontend/test/utils/press/_press.models';
import { fireEvent } from '@testing-library/react-native';
import { type ReactTestInstance } from 'react-test-renderer';

export const _press = (element: _PressParamsModel): _PressModel =>
  fireEvent.press(element as unknown as ReactTestInstance);
