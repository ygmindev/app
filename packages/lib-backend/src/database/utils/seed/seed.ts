import { Container } from '@lib/backend/core/utils/Container/Container';
import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import { type SeedModel } from '@lib/backend/database/utils/seed/seed.models';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export const seed = async (): Promise<SeedModel> => {
  for (const resource of SEED_DATA) {
    const { data, name } = resource;
    const implementations = fromGlobs([`**/resources/**/${name}Implementation.ts`], {
      isAbsolute: true,
      root: fromPackages('lib-backend/src'),
    });
    for (const implementation of implementations) {
      await import(implementation);
    }
    const implementation = Container.get<EntityResourceImplementationModel<unknown, unknown>>(
      `${name}Implementation`,
    );
    for (const form of data()) {
      implementation.create && (await implementation.create({ form }));
    }
  }
};
