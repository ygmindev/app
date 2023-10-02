import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { SEED_DATA } from '#lib-backend/test/utils/seeder/seeder.constants';
import { type SeederModel } from '#lib-backend/test/utils/seeder/seeder.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export const seeder = async (): Promise<SeederModel> => {
  const services = fromGlobs(['**/resources/**/*Service.ts'], {
    isAbsolute: true,
    root: fromPackages('lib-backend/src'),
  });
  for (const service of services) {
    await import(service);
  }
  const database = Container.get(Database, DATABASE_TYPE.MONGO);
  await database.connect();
  return {
    clear: async () => {
      for (const resource of SEED_DATA) {
        const { name } = resource;
        const repository = database.getRepository({ name });
        await repository.clear();
      }
    },
    seed: async () => {
      for (const resource of SEED_DATA) {
        const { data, name } = resource;
        const service = Container.get<EntityResourceServiceModel<unknown, unknown>>(
          `${name}Service`,
        );
        for (const form of data()) {
          service.create && (await service.create({ form }));
        }
      }
    },
  };
};
