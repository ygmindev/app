import { join, resolve } from 'path';

import type {
  FromRootModel,
  FromRootParamsModel,
} from '#lib-backend/file/utils/fromRoot/fromRoot.models';

const ROOT_DIR = resolve(__dirname, '../../../../../..');

export const fromRoot = (...paths: FromRootParamsModel): FromRootModel => join(ROOT_DIR, ...paths);
