import {
  type _OnBeforePrerenderModel,
  type _OnBeforePrerenderParamsModel,
} from '@lib/config/node/framework/onBeforePrerender/_onBeforePrerender.models';

export const _onBeforePrerender =
  ({ routes }: _OnBeforePrerenderParamsModel): _OnBeforePrerenderModel =>
  async () =>
    routes.map(({ pathname }) => ({
      pageContext: {},
      url: pathname,
    }));
