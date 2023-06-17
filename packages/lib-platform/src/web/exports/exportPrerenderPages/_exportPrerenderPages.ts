import type {
  _ExportPrerenderPagesModel,
  _ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';

export const _exportPrerenderPages = ({
  pages,
}: _ExportPrerenderPagesParamsModel): _ExportPrerenderPagesModel => ({
  pages: async (_pageContext) =>
    pages.map(({ context, pathname }) => ({
      pageContext: { context },
      url: pathname,
    })),
});
