import { _press } from '@lib/frontend/test/utils/press/_press';
import {
  type PressModel,
  type PressParamsModel,
} from '@lib/frontend/test/utils/press/press.models';

export const press = (params: PressParamsModel): PressModel => _press(params);
