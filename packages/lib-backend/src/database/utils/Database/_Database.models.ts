import { type RepositoryModel } from '#lib-backend/database/utils/Database/Database.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';

export type _DatabaseModel = {
  close(): Promise<void>;
  connect(): Promise<void>;
  getRepository<TType>(params: ResourceNameParamsModel): RepositoryModel<TType>;
  isConnected(): Promise<boolean>;
};
