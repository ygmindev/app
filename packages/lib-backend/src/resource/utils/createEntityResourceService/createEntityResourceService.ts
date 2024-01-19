import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import {
  type CreateEntityResourceServiceModel,
  type CreateEntityResourceServiceParamsModel,
} from '@lib/backend/resource/utils/createEntityResourceService/createEntityResourceService.models';
import { createResourceService } from '@lib/backend/resource/utils/createResourceService/createResourceService';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const createEntityResourceService = <TType, TForm = EntityResourceDataModel<TType>>({
  Resource,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterUpdate,
  beforeCreate,
  beforeCreateMany,
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
  let repository: RepositoryModel<TType, TForm>;
  const getRepository = (): RepositoryModel<TType, TForm> => {
    repository =
      repository ??
      Container.get(Database, DATABASE_TYPE.MONGO).getRepository<TType, TForm>({ name });
    return repository;
  };
  return createResourceService<TType, TForm>({
    Resource,
    afterCreate,
    afterCreateMany,
    afterGet,
    afterGetConnection,
    afterGetMany,
    afterRemove,
    afterUpdate,
    beforeCreate,
    beforeCreateMany,
    beforeGet,
    beforeGetConnection,
    beforeGetMany,
    beforeRemove,
    beforeUpdate,
    count: async () => getRepository().count(),
    create: async (input) => getRepository().create(input),
    createMany: async (input) => getRepository().createMany(input),
    get: async (input) => getRepository().get(input),
    getConnection: async (input) => getRepository().getConnection(input),
    getMany: async (input) => getRepository().getMany(input),
    name,
    remove: async (input) => getRepository().remove(input),
    update: async (input) => getRepository().update(input),
  });
};
