import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { LibraryConfigParamsModel } from '@lib/config/framework/library/library.models';

export const libraryConfig: LibraryConfigParamsModel = {
  extension: 'library',

  path: 'assets/library/components.json',

  patterns: [fromPackages('lib-frontend/src/**/components/**/+([A-Za-z]).tsx')],
};
