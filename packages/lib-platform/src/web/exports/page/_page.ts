import {
  type _PageModel,
  type _PageParamsModel,
} from '@lib/platform/web/exports/page/_page.models';

export const _page = ({ Component }: _PageParamsModel): _PageModel => Component;
