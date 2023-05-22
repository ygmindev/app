import type {
  _ExportPageModel,
  _ExportPageParamsModel,
} from '@lib/platform/web/exports/exportPage/_exportPage.models';

export const _exportPage = ({ Component }: _ExportPageParamsModel): _ExportPageModel => ({
  Page: Component,
});
