import {
  type _PressModel,
  type _PressParamsModel,
} from '@lib/frontend/test/utils/press/_press.models';
import { fireEvent } from '@testing-library/react';

export const _press = (element: _PressParamsModel): _PressModel => {
  fireEvent.click(element as unknown as Element);
};
