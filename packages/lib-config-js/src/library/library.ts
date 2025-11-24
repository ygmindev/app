import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type LibraryConfigModel } from '@lib/config/library/library.models';
import { Config } from '@lib/config/utils/Config/Config';

// TODO: delete?
export const libraryConfig = new Config<LibraryConfigModel>({
  params: () => ({
    configDir: 'assets/library/components.json',

    extension: 'library',

    patterns: [fromPackages('lib-frontend-js/src/**/components/**/+([A-Za-z]).tsx')],
  }),
});
