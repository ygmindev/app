import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { LibraryConfigParamsModel } from '@lib/config/framework/library/library.models';

export const libraryConfig: LibraryConfigParamsModel = {
  inputPath: fromPackages('lib-frontend/src'),

  resolveExtensions: ['.library.tsx'],

  staticPath: fromWorking('public'),
};
