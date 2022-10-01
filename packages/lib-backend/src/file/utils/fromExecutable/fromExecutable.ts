import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';

export const fromExecutable = (...paths: Array<string>): string =>
  fromRoot('node_modules/.bin', ...paths);
