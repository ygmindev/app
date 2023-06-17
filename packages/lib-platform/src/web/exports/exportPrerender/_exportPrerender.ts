import type {
  _ExportPrerenderModel,
  _ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/_exportPrerender.models';

export const _exportPrerender = ({}: _ExportPrerenderParamsModel): _ExportPrerenderModel => ({
  prerender: async ({ pageContexts }) => ({ prerenderContext: { pageContexts } }),
});
