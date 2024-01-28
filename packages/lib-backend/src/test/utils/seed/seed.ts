import { Container } from '@lib/backend/core/utils/Container/Container';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { SEED_DATA } from '@lib/backend/test/utils/seed/seed.constants';
import { type SeedModel } from '@lib/backend/test/utils/seed/seed.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export const seed = async (): Promise<SeedModel> => {
  for (const resource of SEED_DATA) {
    const { data, name } = resource;
    const services = fromGlobs([`**/resources/**/${name}Implementation.ts`], {
      isAbsolute: true,
      root: fromPackages('lib-backend/src'),
    });
    for (const service of services) {
      await import(service);
    }
    const service = Container.get<EntityResourceImplementationModel<unknown, unknown>>(`${name}Implementation`);
    for (const form of data()) {
      service.create && (await service.create({ form }));
    }
  }
};
