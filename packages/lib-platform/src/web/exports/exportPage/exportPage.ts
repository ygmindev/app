import { _exportPage } from '#lib-platform/web/exports/exportPage/_exportPage';
import type {
  ExportPageModel,
  ExportPageParamsModel,
} from '#lib-platform/web/exports/exportPage/exportPage.models';

export const exportPage = (params: ExportPageParamsModel): ExportPageModel => _exportPage(params);
