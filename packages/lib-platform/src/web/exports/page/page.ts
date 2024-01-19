import { _page } from '@lib/platform/web/exports/page/_page';
import { type PageModel, type PageParamsModel } from '@lib/platform/web/exports/page/page.models';

export const page = (params: PageParamsModel): PageModel => _page(params);
