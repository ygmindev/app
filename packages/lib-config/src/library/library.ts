import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type LibraryConfigModel } from '@lib/config/library/library.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  config: {
    extension: 'library',

    path: 'assets/library/components.json',

    patterns: [fromPackages('lib-frontend/src/**/components/**/+([A-Za-z]).tsx')],
  } satisfies LibraryConfigModel,
});

export { _config, config };
