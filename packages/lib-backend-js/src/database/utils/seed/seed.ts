import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import { type SeedModel } from '@lib/backend/database/utils/seed/seed.models';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import toString from 'lodash/toString';

export const seed = async (): Promise<SeedModel> => {
  for (const { data, name, root } of SEED_DATA) {
    const implementations = fromGlobs([`**/resources/**/${name}Implementation.ts`], {
      isAbsolute: true,
      root: fromPackages('lib-backend-js/src'),
    });
    for (const implementation of implementations) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require(implementation);
    }
    const implementation = Container.get<
      ResourceImplementationModel<unknown, unknown, EntityResourceModel>
    >(`${name}Implementation`);
    for (const form of data?.() ?? []) {
      let rootF = await root?.();
      rootF && (rootF = toString(rootF));
      await implementation.create?.({ form, root: rootF });
    }
  }
};
