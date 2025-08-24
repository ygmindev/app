import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import { type SeedModel } from '@lib/backend/database/utils/seed/seed.models';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import toString from 'lodash/toString';

export const seed = async (): Promise<SeedModel> => {
  const database = Container.get(Database, DATABASE_TYPE.MONGO);

  for (const { afterCreate, data, name, root } of SEED_DATA) {
    const implementations = fromGlobs([`**/*/${name}Implementation.ts`], {
      isAbsolute: true,
      root: fromPackages('lib-model-js/src'),
    });
    for (const pathname of implementations) {
      const cls = (
        (await import(pathname)) as Record<
          string,
          ClassModel<ResourceImplementationModel<EntityResourceModel, unknown>>
        >
      )[`${name}Implementation`];
      const implementation = Container.get(cls);
      for (const form of data?.() ?? []) {
        let rootF = await root?.();
        rootF && (rootF = toString(rootF));
        const formF = form as Partial<EntityResourceModel>;
        formF.isFixture = true;
        const result = await implementation.create?.({
          form,
          root: rootF,
        } as ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, unknown, unknown>);
        await afterCreate?.(result as ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, unknown>);
      }
    }
  }

  return {
    cleanUp: async () => {
      for (const name of database.getRepositories()) {
        const repository = database.getRepository<EntityResourceModel>({ name });
        await repository.remove({ filter: [{ field: 'isFixture', value: true }] });
      }
    },
  };
};
