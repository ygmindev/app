import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';

export type _DatabaseModel = {
  close(): Promise<void>;
  connect(): Promise<void>;
  flush(): Promise<void>;
  getRepositories(): Array<string>;
  getRepository<TType>(params: GetRepositoryParamsModel<TType>): RepositoryModel<TType>;
  hydrate<TType extends unknown>(
    name: string,
    form?: Partial<TType>,
    isLeaf?: boolean,
  ): Partial<TType>;
  isConnected(): Promise<boolean>;
};

export type GetRepositoryParamsModel<TType extends unknown> = ResourceNameParamsModel;
