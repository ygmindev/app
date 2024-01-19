import {
  type FromExecutableModel,
  type FromExecutableParamsModel,
} from '@lib/backend/file/utils/fromExecutable/fromExecutable.models';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';

export const fromExecutable = (...paths: FromExecutableParamsModel): FromExecutableModel =>
  fromModules('.bin', ...paths);
