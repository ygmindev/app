import { fireEvent } from '@testing-library/react';

import type { _PressModel, _PressParamsModel } from '#lib-frontend/test/utils/press/_press.models';

export const _press = (element: _PressParamsModel): _PressModel => {
  fireEvent.click(element as unknown as Element);
};
