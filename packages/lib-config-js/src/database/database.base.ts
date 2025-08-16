import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { _database } from '@lib/config/database/_database';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { requireInterop } from '@lib/shared/core/utils/requireInterop/requireInterop';

export const config = defineConfig<DatabaseConfigModel, _DatabaseConfigModel>({
  config: _database,

  params: () => {
    const entities = fromGlobs([`**/*/*${DATABASE_CONFIG.resourcePostfix}`], {
      isAbsolute: true,
      root: fromRoot(),
    })?.map(requireInterop) as Array<ClassModel<EntityResourceModel>>;
    return {
      ...DATABASE_CONFIG,

      entities,
    };
  },
});

export default config;
