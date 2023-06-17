import { join } from 'path';

import type {
  FromRootModel,
  FromRootParamsModel,
} from '#lib-backend/file/utils/fromRoot/fromRoot.models';
import { getRoot } from '#lib-backend/file/utils/getRoot/getRoot';

console.warn(`###${getRoot()}`);

export const fromRoot = (...paths: FromRootParamsModel): FromRootModel => join(getRoot(), ...paths);
