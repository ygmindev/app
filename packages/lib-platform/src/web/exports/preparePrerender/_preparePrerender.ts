import {
  type _PreparePrerenderModel,
  type _PreparePrerenderParamsModel,
} from '#lib-platform/web/exports/preparePrerender/_preparePrerender.models';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';

export const _preparePrerender =
  ({ pages }: _PreparePrerenderParamsModel): _PreparePrerenderModel =>
  async () =>
    sequence(
      pages.map(({ getContext, pathname }) => async () => ({
        pageContext: getContext ? await getContext() : {},
        url: pathname,
      })),
    );
