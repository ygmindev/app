import {
  type FromRootModel,
  type FromRootParamsModel,
} from '@lib/backend/file/utils/fromRoot/fromRoot.models';
import { getRoot } from '@lib/backend/file/utils/getRoot/getRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';

export const fromRoot = (...paths: FromRootParamsModel): FromRootModel =>
  joinPaths([getRoot(), ...paths]);
