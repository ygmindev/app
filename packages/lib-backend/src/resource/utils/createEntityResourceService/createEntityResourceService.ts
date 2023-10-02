import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { type RepositoryModel } from '#lib-backend/database/utils/Database/Database.models';
import {
  type CreateEntityResourceServiceModel,
  type CreateEntityResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService.models';
import { createResourceService } from '#lib-backend/resource/utils/createResourceService/createResourceService';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const createEntityResourceService = <TType, TForm = EntityResourceDataModel<TType>>({
  Resource,
  afterCreate,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterUpdate,
  beforeCreate,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeUpdate,
  name,
}: CreateEntityResourceServiceParamsModel<TType, TForm>): CreateEntityResourceServiceModel<
  TType,
  TForm
> => {
  const repository: RepositoryModel<TType, TForm> = Container.get(
    Database,
    DATABASE_TYPE.MONGO,
  ).getRepository<TType, TForm>({ name });
  return createResourceService<TType, TForm>({
    Resource,
    afterCreate,
    afterGet,
    afterGetConnection,
    afterGetMany,
    afterRemove,
    afterUpdate,
    beforeCreate,
    beforeGet,
    beforeGetConnection,
    beforeGetMany,
    beforeRemove,
    beforeUpdate,
    count: async () => repository.count(),
    create: async (input) => repository.create(input),
    get: async (input) => repository.get(input),
    getConnection: async (input) => repository.getConnection(input),
    getMany: async (input) => repository.getMany(input),
    name,
    remove: async (input) => repository.remove(input),
    update: async (input) => repository.update(input),
  });
};
