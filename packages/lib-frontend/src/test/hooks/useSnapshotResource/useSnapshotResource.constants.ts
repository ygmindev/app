import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';

export const SNAPSHOT_LIST_FIELDS: GraphQlQueryParamsFieldsModel<SnapshotModel> = ['name'];

export const SNAPSHOT_FIELDS: GraphQlQueryParamsFieldsModel<SnapshotModel> = ['name', 'images'];
