import { _scroll } from '@lib/frontend/test/utils/scroll/_scroll';
import {
  type ScrollModel,
  type ScrollParamsModel,
} from '@lib/frontend/test/utils/scroll/scroll.models';

export const scroll = (params: ScrollParamsModel): ScrollModel => _scroll(params);
