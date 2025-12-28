import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ClassModel, type PartialArrayModel } from '@lib/shared/core/core.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { type SeedModel, type SeedParamsModel } from '@tool/task/database/tasks/seed/seed.models';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

export const seed = buildTask<SeedParamsModel, SeedModel>({
  task: async ({ entities }) => {
    const database = Container.get(Database, DATABASE_TYPE.MONGO);

    const cleanUp = async (): Promise<void> => {
      for (const name of database.getRepositories()) {
        const repository = database.getRepository<EntityResourceModel>({ name });
        await repository.remove({ filter: [{ field: 'isFixture', value: true }] });
      }
    };

    await cleanUp();

    const fixtures = fromGlobs(
      entities
        ? entities.map((v) => `**/*/${upperFirst(camelCase(v))}.fixtures.ts`)
        : [`**/*/*.fixtures.ts`],
      {
        isAbsolute: true,
        root: fromPackages('lib-model-js/src'),
      },
    );

    for (const fixture of fixtures) {
      const { dirname, main } = fileInfo(fixture);

      const { FIXTURES } = (await import(fixture)) as {
        FIXTURES: PartialArrayModel<EntityResourceModel>;
      };

      const implementationName = `${main}Implementation`;
      const cls = (await import(`${dirname}/${implementationName}/${implementationName}`))[
        implementationName
      ] as ClassModel<ResourceImplementationModel<EntityResourceModel, unknown>>;

      const implementation = Container.get(cls);

      const formsF = FIXTURES.map((form) => ({
        ...(form as Partial<EntityResourceModel>),
        isFixture: true,
      }));
      try {
        await implementation.createMany?.({ form: formsF });
      } catch (e) {
        logger.fail(e as Error);
      }
    }

    return {};
  },
});
