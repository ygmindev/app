import { _hoverOut } from '@lib/frontend/test/utils/hoverOut/_hoverOut';
import type {
  HoverOutModel,
  HoverOutParamsModel,
} from '@lib/frontend/test/utils/hoverOut/hoverOut.models';

export const hoverOut = (params: HoverOutParamsModel): HoverOutModel => _hoverOut(params);
