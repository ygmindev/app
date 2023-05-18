import type {
  _ExportPageModel,
  _ExportPageParamsModel,
} from 'packages/lib-platform/src/web/exports/exportPage/_exportPage.models';

export const _exportPage = ({ Component }: _ExportPageParamsModel): _ExportPageModel => ({
  Page: Component,
});
