import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import {
  type CreateEntityResourceImplementationModel,
  type CreateEntityResourceImplementationParamsModel,
} from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation.models';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const createEntityResourceImplementation = <TType extends EntityResourceModel>({
  Resource,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterSearch,
  afterUpdate,
  afterUpdateMany,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeSearch,
  beforeUpdate,
  beforeUpdateMany,
  name,
}: CreateEntityResourceImplementationParamsModel<TType>): CreateEntityResourceImplementationModel<TType> => {
  let repositry: RepositoryModel<TType>;

  const getRepository = (): RepositoryModel<TType> => {
    repositry = repositry ?? Container.get(Database, DATABASE_TYPE.MONGO).getRepository({ name });
    return repositry;
  };

  return createResourceImplementation<TType>({
    Resource,
    afterCreate,
    afterCreateMany,
    afterGet,
    afterGetConnection,
    afterGetMany,
    afterRemove,
    afterSearch,
    afterUpdate,
    afterUpdateMany,
    beforeCreate,
    beforeCreateMany,
    beforeGet,
    beforeGetConnection,
    beforeGetMany,
    beforeRemove,
    beforeSearch,
    beforeUpdate,
    beforeUpdateMany,
    count: async (input) => getRepository().count(input),
    create: async (...input) => getRepository().create(...input),
    createMany: async (...input) => getRepository().createMany(...input),
    get: async (...input) => getRepository().get(...input),
    getConnection: async (...input) => getRepository().getConnection(...input),
    getMany: async (...input) => getRepository().getMany(...input),
    name,
    remove: async (...input) => getRepository().remove(...input),
    search: async (...input) => getRepository().search(...input),
    update: async (...input) => getRepository().update(...input),
    updateMany: async (...input) => getRepository().updateMany(...input),
  });
};
