import type {
  FromRootModel,
  FromRootParamsModel,
} from '@lib/backend/file/utils/fromRoot/fromRoot.models';
import { join, resolve } from 'path';

const ROOT_DIR = resolve(__dirname, '../../../../../..');

export const fromRoot = (...paths: FromRootParamsModel): FromRootModel => join(ROOT_DIR, ...paths);
