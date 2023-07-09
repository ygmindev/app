import { type RepositoryModel } from '#lib-backend/database/utils/Database/Database.models';
import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';

export type _DatabaseModel = {
  close: OptionalCallablePromiseModel;
  connect: OptionalCallablePromiseModel;
  getRepository<TType>(params: ResourceNameParamsModel): RepositoryModel<TType>;
  isConnected: OptionalCallablePromiseModel<boolean>;
};
