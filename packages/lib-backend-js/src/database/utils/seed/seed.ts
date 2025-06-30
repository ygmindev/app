import { SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import { type SeedModel } from '@lib/backend/database/utils/seed/seed.models';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import toString from 'lodash/toString';

export const seed = async (): Promise<SeedModel> => {
  for (const { afterCreate, data, name, root } of SEED_DATA) {
    const implementations = fromGlobs([`**/resources/**/${name}Implementation.ts`], {
      isAbsolute: true,
      root: fromPackages('lib-backend-js/src'),
    });
    for (const implementation of implementations) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require(implementation);
    }
    const implementation = Container.get<ResourceImplementationModel<EntityResourceModel, unknown>>(
      `${name}Implementation`,
    );
    for (const form of data?.() ?? []) {
      let rootF = await root?.();
      rootF && (rootF = toString(rootF));

      const formF = form as EntityResourceDataModel<EntityResourceModel>;
      formF.isFixture = true;

      const result = await implementation.create?.({
        form: formF,
        root: rootF,
      } as ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, unknown, unknown>);
      await afterCreate?.(result as ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, unknown>);
    }
  }
};
