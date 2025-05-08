import { type HandlerModel } from '@lib/backend/web/utils/handler/handler.models';
import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';

export type SsrHandlerParamsModel = {
  internationalize: InternationalizeConfigModel;
};

export type SsrHandlerModel = HandlerModel;
