import { join, resolve } from 'path';

const ROOT_DIR = resolve(__dirname, '../../../../../../');

export const fromRoot = (...paths: Array<string>): string => join(ROOT_DIR, ...paths);
