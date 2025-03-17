import { type _DatabaseModel } from '@lib/backend/database/utils/Database/_Database.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type DatabaseModel = _DatabaseModel;

export type RepositoryModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = ResourceImplementationModel<TType, TForm> & {
  clear(): Promise<void>;
  count(filter?: Array<FilterModel<TType>>): Promise<number>;
  flush(): Promise<void>;
};
