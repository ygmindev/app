import { Container } from '@lib/shared/core/utils/Container/Container';
import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import { type SeedModel } from '@lib/backend/database/utils/seed/seed.models';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export const seed = async (): Promise<SeedModel> => {
  for (const { afterCreate, data, name } of SEED_DATA) {
    const implementations = fromGlobs([`**/resources/**/${name}Implementation.ts`], {
      isAbsolute: true,
      root: fromPackages('lib-backend-js/src'),
    });
    for (const implementation of implementations) {
      require(implementation);
    }
    const implementation = Container.get<EntityResourceImplementationModel<unknown, unknown>>(
      `${name}Implementation`,
    );
    for (const form of data()) {
      const result = implementation.create && (await implementation.create({ form }));
      result && afterCreate && (await afterCreate(result));
    }
  }
};
