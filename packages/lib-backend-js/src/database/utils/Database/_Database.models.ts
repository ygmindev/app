import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type _DatabaseModel = {
  close(): Promise<void>;
  connect(): Promise<void>;
  flush(): Promise<void>;
  getRepository<TType, TForm = EntityResourceDataModel<TType>>(
    params: GetRepositoryParamsModel<TType>,
  ): RepositoryModel<TType, TForm>;
  isConnected(): Promise<boolean>;
};

export type GetRepositoryParamsModel<TType> = ResourceNameParamsModel | { name: ClassModel<TType> };
