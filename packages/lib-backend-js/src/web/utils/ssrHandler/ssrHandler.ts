import { handler } from '@lib/backend/web/utils/handler/handler';
import {
  type SsrHandlerModel,
  type SsrHandlerParamsModel,
} from '@lib/backend/web/utils/ssrHandler/ssrHandler.models';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { config as internationalizeConfig } from '@lib/config/locale/internationalize/internationalize.node';
import { render } from '@lib/shared/web/utils/render/render';

export const ssrHandler = (
  { internationalize }: SsrHandlerParamsModel = {
    internationalize: internationalizeConfig.params(),
  },
): SsrHandlerModel => {
  const i18n = _internationalize(internationalize);
  return handler({
    name: 'ssr',
    onRequest: async (request) => {
      request.i18n = i18n;
      const response = await render(request);
      return response;
    },
  });
};
