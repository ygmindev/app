import { _exportPage } from 'packages/lib-platform/src/web/exports/exportPage/_exportPage';
import type {
  ExportPageModel,
  ExportPageParamsModel,
} from '@lib/platformlatform/src/web/exports/exportPage/exportPage.models';

export const exportPage = (params: ExportPageParamsModel): ExportPageModel => _exportPage(params);
