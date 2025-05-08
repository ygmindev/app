import {
  type _HandlerModel,
  type _HandlerParamsModel,
} from '@lib/backend/web/utils/handler/_handler.models';

export const _handler = ({ onRequest }: _HandlerParamsModel): _HandlerModel => ({
  async fetch(request: Request): Promise<Response> {
    const response = new Response();
    return onRequest(request, response);
  },
});
