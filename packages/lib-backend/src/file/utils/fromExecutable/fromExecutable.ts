import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';

export const fromExecutable = (...paths: Array<string>): string => fromModules('.bin', ...paths);
