import { type PagePropsModel } from '#lib-frontend/core/core.models';
import { type LocationParamsModel } from '#lib-frontend/route/route.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type SnapshotPagePropsModel = PagePropsModel;

export type SnapshotPagearamsModel = LocationParamsModel & WithIdModel;
