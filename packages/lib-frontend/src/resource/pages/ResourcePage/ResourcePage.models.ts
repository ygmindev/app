import { type PagePropsModel } from '#lib-frontend/core/core.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ResourcePagePropsModel = PagePropsModel;

export type ResourcePageParamsModel = PartialModel<WithIdModel>;
