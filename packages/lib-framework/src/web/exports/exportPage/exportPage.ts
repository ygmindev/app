import { _exportPage } from '@lib/framework/web/exports/exportPage/_exportPage';
import type {
  ExportPageModel,
  ExportPageParamsModel,
} from '@lib/framework/web/exports/exportPage/exportPage.models';

export const exportPage = (params: ExportPageParamsModel): ExportPageModel => _exportPage(params);
