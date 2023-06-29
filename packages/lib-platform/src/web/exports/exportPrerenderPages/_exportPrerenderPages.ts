import {
  type _ExportPrerenderPagesModel,
  type _ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';

export const _exportPrerenderPages = ({
  pages,
}: _ExportPrerenderPagesParamsModel): _ExportPrerenderPagesModel => ({
  prerenderPages: async () =>
    sequence(
      pages.map(({ getContext, pathname }) => async () => ({
        pageContext: getContext ? await getContext() : {},
        url: pathname,
      })),
    ),
});
