import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import type { SeedDataModel, SeedParamsModel } from '@lib/backend/database/utils/seed/seed.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const seed = async ({
  names = Object.keys(SEED_DATA) as Array<keyof SeedDataModel>,
}: SeedParamsModel = {}): Promise<void> => {
  const database = Container.get(DatabaseMain);
  for (const name of names) {
    const repository = database.getRepository({ name });
    await repository.clear();
    for (const form of SEED_DATA[name]) {
      await repository.create({ form });
    }
  }
};
