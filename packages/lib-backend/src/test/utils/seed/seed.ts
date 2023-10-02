import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { SEED_DATA } from '#lib-backend/test/utils/seed/seed.constants';
import { type SeedModel } from '#lib-backend/test/utils/seed/seed.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export const seed = async (): Promise<SeedModel> => {
  for (const resource of SEED_DATA) {
    const { data, name } = resource;
    const services = fromGlobs([`**/resources/**/${name}Service.ts`], {
      isAbsolute: true,
      root: fromPackages('lib-backend/src'),
    });
    for (const service of services) {
      await import(service);
    }
    const service = Container.get<EntityResourceServiceModel<unknown, unknown>>(`${name}Service`);
    for (const form of data()) {
      service.create && (await service.create({ form }));
    }
  }
};
