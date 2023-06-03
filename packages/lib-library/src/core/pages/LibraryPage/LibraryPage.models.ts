import type { PagePropsModel } from '@lib/frontend/core/core.models';
import type { LocationParamsModel } from '@lib/frontend/route/route.models';

export interface LibraryPagePropsModel extends PagePropsModel {}

export interface LibraryPageParamsModel extends LocationParamsModel {
  id?: string;
}
