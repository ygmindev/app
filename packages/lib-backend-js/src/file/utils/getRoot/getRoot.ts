import { type GetRootModel } from '@lib/backend/file/utils/getRoot/getRoot.models';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const getRoot = (): GetRootModel => resolve(__dirname, '../../../../../../');
