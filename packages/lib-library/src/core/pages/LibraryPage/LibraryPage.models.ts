import { type PagePropsModel } from '#lib-frontend/core/core.models';
import { type LocationParamsModel } from '#lib-frontend/route/route.models';

export type LibraryPagePropsModel = PagePropsModel;

export type LibraryPageParamsModel = {
  id?: string;
} & LocationParamsModel;
