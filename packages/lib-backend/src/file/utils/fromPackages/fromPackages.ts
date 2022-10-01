import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';

export const fromPackages = (...paths: Array<string>): string => fromRoot('packages', ...paths);
