import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { _LibraryConfigModel } from '@lib/config/framework/library/_library.models';

const libraryConfig: _LibraryConfigModel = {
  extension: 'library',

  path: 'assets/library/components.json',

  patterns: [fromPackages('lib-frontend/src/**/components/**/+([A-Za-z]).tsx')],
};

export default libraryConfig;
