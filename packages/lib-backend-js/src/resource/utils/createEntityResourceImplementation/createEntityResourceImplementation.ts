import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import {
  type CreateEntityResourceImplementationModel,
  type CreateEntityResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation.models';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const createEntityResourceImplementation = <TType, TForm = EntityResourceDataModel<TType>>({
  Resource,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterSearch,
  afterUpdate,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeSearch,
  beforeUpdate,
  name,
}: CreateEntityResourceImplementationParamsModel<
  TType,
  TForm
>): CreateEntityResourceImplementationModel<TType, TForm> => {
  let repository: RepositoryModel<TType, TForm>;
  const getRepository = (): RepositoryModel<TType, TForm> => {
    !repository && (repository = Container.get(Database, DATABASE_TYPE.MONGO).getRepository({ name }));
    return repository;
  };
  return createResourceImplementation<TType, TForm>({
    Resource,
    afterCreate,
    afterCreateMany,
    afterGet,
    afterGetConnection,
    afterGetMany,
    afterRemove,
    afterSearch,
    afterUpdate,
    beforeCreate,
    beforeCreateMany,
    beforeGet,
    beforeGetConnection,
    beforeGetMany,
    beforeRemove,
    beforeSearch,
    beforeUpdate,
    count: async () => getRepository().count(),
    create: async (input) => getRepository().create(input),
    createMany: async (input) => getRepository().createMany(input),
    get: async (input) => getRepository().get(input),
    getConnection: async (input) => getRepository().getConnection(input),
    getMany: async (input) => getRepository().getMany(input),
    name,
    remove: async (input) => getRepository().remove(input),
    search: async (input) => getRepository().search(input),
    update: async (input) => getRepository().update(input),
  });
};
