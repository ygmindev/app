import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';

export const fromStatic = (...paths: Array<string>): string =>
  fromPackages('asset-static', ...paths);
