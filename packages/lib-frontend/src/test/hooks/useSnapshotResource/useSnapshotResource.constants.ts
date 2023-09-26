import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';

export const SNAPSHOT_LIST_FIELDS = ['name'] satisfies GraphQlQueryParamsFieldsModel<SnapshotModel>;

export const SNAPSHOT_FIELDS = [
  'name',
  'images',
] satisfies GraphQlQueryParamsFieldsModel<SnapshotModel>;
