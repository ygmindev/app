import type { LibraryConfigModel } from '#lib-config/platform/library/library.models';

import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';

export const config: LibraryConfigModel = {
  extension: 'library',

  path: 'assets/library/components.json',

  patterns: [fromPackages('lib-frontend/src/**/components/**/+([A-Za-z]).tsx')],
};
