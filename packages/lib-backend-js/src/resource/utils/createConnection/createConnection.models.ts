import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';

export type CreateConnectionParamsModel<TType> = {
  Resource(): ResourceClassModel<TType>;
  name: string;
};

export type CreateConnectionModel<TType> = ResourceClassModel<ConnectionModel<TType>>;
