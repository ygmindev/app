import isFunction from 'lodash/isFunction';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { SEED_DATA } from '#lib-backend/database/utils/seed/seed.constants';
import { type SeedParamsModel } from '#lib-backend/database/utils/seed/seed.models';
import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';

export const seed = async ({ names }: SeedParamsModel = {}): Promise<void> => {
  const services = fromGlobs(['**/resources/**/*Service.ts'], {
    isAbsolute: true,
    root: fromPackages('lib-backend/src'),
  });
  for (const service of services) {
    await import(service);
  }

  const database = Container.get(Database, DATABASE_TYPE.MONGO);
  await database.connect();
  for (const resource of SEED_DATA) {
    const { data, name } = resource;
    if (!names || names.includes(name)) {
      const repository = database.getRepository({ name });
      await repository.clear();
      const service = Container.get<EntityResourceServiceModel<unknown, unknown>>(`${name}Service`);
      for (const form of data) {
        const formF = isFunction(form) ? await (form as CallablePromiseModel<unknown>)() : form;
        service.create && (await service.create({ form: formF }));
      }
    }
  }
};
