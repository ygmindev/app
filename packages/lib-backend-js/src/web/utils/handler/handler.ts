import { _handler } from '@lib/backend/web/utils/handler/_handler';
import {
  type HandlerModel,
  type HandlerParamsModel,
} from '@lib/backend/web/utils/handler/handler.models';

export const handler = ({ ...params }: HandlerParamsModel): HandlerModel => _handler({ ...params });
