import { type _DatabaseModel } from '@lib/backend/database/utils/Database/_Database.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type Collection, type Document } from 'mongodb';

export type DatabaseModel = _DatabaseModel;

export type RepositoryModel<TType extends unknown> = ResourceImplementationModel<TType> & {
  clear(): Promise<void>;

  collection(): Collection<TType & Document>;

  count(params?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>): Promise<number>;

  flush(): Promise<void>;
};
