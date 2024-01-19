import { _hoverIn } from '@lib/frontend/test/utils/hoverIn/_hoverIn';
import {
  type HoverInModel,
  type HoverInParamsModel,
} from '@lib/frontend/test/utils/hoverIn/hoverIn.models';

export const hoverIn = (params: HoverInParamsModel): HoverInModel => _hoverIn(params);
