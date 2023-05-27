import type {
  ExportPageModel,
  ExportPageParamsModel,
} from '@lib/platform/web/exports/exportPage/exportPage.models';
import { _exportPage } from '@lib/platform/web/exports/exportPage/_exportPage';

export const exportPage = (params: ExportPageParamsModel): ExportPageModel => _exportPage(params);
