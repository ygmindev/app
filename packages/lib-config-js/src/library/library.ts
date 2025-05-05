import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type LibraryConfigModel } from '@lib/config/library/library.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

// TODO: delete?
export const config = defineConfig<LibraryConfigModel>({
  params: () => ({
    configDir: 'assets/library/components.json',

    extension: 'library',

    patterns: [fromPackages('lib-frontend-js/src/**/components/**/+([A-Za-z]).tsx')],
  }),
});

export default config;
