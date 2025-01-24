import { type GetRootModel } from '@lib/backend/file/utils/getRoot/getRoot.models';
import { resolve } from 'path';

export const getRoot = (): GetRootModel => resolve(__dirname, '../../../../../../');
