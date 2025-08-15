import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { type ClearSeedModel } from '@lib/backend/database/utils/clearSeed/clearSeed.models';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const clearSeed = async (): Promise<ClearSeedModel> => {
  const database = Container.get(Database, DATABASE_TYPE.MONGO);
  for (const resource of SEED_DATA) {
    const { name } = resource;
    const repository = database.getRepository<EntityResourceModel>({ name });
    await repository.remove({ filter: [{ field: 'isFixture', value: true }] });
  }
};
