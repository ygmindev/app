import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type LibraryConfigModel } from '@lib/config/library/library.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const libraryConfig = defineConfig<LibraryConfigModel>({
  params: () => ({
    configDir: 'assets/library/components.json',

    extension: 'library',

    patterns: [fromPackages('lib-frontend/src/**/components/**/+([A-Za-z]).tsx')],
  }),
});
