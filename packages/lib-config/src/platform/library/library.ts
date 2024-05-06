import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type LibraryConfigModel } from '@lib/config/platform/library/library.models';

const { _config, config } = defineConfig({
  config: {
    extension: 'library',

    path: 'assets/library/components.json',

    patterns: [fromPackages('lib-frontend/src/**/components/**/+([A-Za-z]).tsx')],
  } satisfies LibraryConfigModel,
});

export { _config, config };
