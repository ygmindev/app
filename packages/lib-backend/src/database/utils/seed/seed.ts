import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import type { SeedParamsModel } from '@lib/backend/database/utils/seed/seed.models';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { Container } from '@lib/shared/core/utils/Container/Container';
import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import { isFunction } from 'lodash';

export const seed = async ({ names }: SeedParamsModel = {}): Promise<void> => {
  const services = fromGlobs({
    globs: ['**/resources/**/*Service.ts'],
    isAbsolute: true,
    root: fromPackages('lib-backend/src'),
  });
  for (const service of services) {
    await import(service);
  }

  const database = Container.get(DatabaseMain);
  await database.initialize();
  for (const resource of SEED_DATA) {
    const { data, name } = resource;
    if (!names || names.includes(name)) {
      const repository = database.getRepository({ name });
      await repository.clear();
      const service = Container.get<EntityResourceServiceModel<unknown, unknown>>(`${name}Service`);
      for (const form of data) {
        const _form = isFunction(form) ? await form() : form;
        service.create && (await service.create({ form: _form }));
      }
    }
  }
};
