import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';

export const fromConfig = (...paths: Array<string>): string =>
  fromPackages('lib-config/src', ...paths);
