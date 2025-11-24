import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type SchemaConfigModel } from '@lib/config/schema/schema.models';
import { Config } from '@lib/config/utils/Config/Config';

export const schemaConfig = new Config<SchemaConfigModel>({
  params: () => ({
    modelExtension: '.models.ts',

    root: fromPackages('lib-model-js'),

    schemaFilename: 'schemas.json',
  }),
});
