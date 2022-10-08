import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import type {
  SeedDataModel,
  SeedParamsModel,
} from '@lib/backend/database/utils/seed/seed.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const seed = async ({ names }: SeedParamsModel = {}): Promise<void> => {
  const _names = names || (Object.keys(SEED_DATA) as Array<keyof SeedDataModel>);
  const database = Container.get(DatabaseMain);
  await database.initialize();
  for (const name of _names) {
    const repository = database.getRepository({ name });
    await repository.clear();
    for (const form of SEED_DATA[name]) {
      await repository.create({ form });
    }
  }
};
