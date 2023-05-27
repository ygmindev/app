import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { LibraryConfigModel } from '@lib/config/platform/library/library.models';

export const config: LibraryConfigModel = {
  extension: 'library',

  path: 'assets/library/components.json',

  patterns: [fromPackages('lib-frontend/src/**/components/**/+([A-Za-z]).tsx')],
};
