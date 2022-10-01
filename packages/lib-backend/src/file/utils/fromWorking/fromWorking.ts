import { resolve } from 'path';

export const fromWorking = (...paths: Array<string>): string => resolve(process.cwd(), ...paths);
