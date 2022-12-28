import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';

export const fromModules = (...paths: Array<string>): string => fromRoot('node_modules', ...paths);
