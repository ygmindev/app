import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';

export const SNAPSHOT_FIELDS: GraphQlQueryParamsFieldsModel<SnapshotModel> = ['name'];

export const SNAPSHOT_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  SnapshotModel
> = [{ result: SNAPSHOT_FIELDS }];
