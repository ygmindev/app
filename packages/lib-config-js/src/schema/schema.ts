import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type SchemaConfigModel } from '@lib/config/schema/schema.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<SchemaConfigModel>({
  params: () => ({
    modelExtension: '.models.ts',

    root: fromPackages('lib-model-js'),

    schemaFilename: 'schemas.json',
  }),
});

export default config;
