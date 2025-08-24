import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';

export type _DatabaseModel = {
  close(): Promise<void>;
  connect(): Promise<void>;
  flush(): Promise<void>;
  getRepositories(): Array<string>;
  getRepository<TType>(params: GetRepositoryParamsModel<TType>): RepositoryModel<TType>;
  isConnected(): Promise<boolean>;
};

export type GetRepositoryParamsModel<TType extends unknown> =
  | ResourceNameParamsModel
  | { name: ClassModel<TType> };
