import { _page } from '@lib/shared/web/utils/page/_page';
import { type PageModel, type PageParamsModel } from '@lib/shared/web/utils/page/page.models';

export const page = (params: PageParamsModel): PageModel => _page(params);
