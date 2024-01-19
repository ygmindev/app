import { _fromGlobs } from '@lib/backend/file/utils/fromGlobs/_fromGlobs';
import {
  type FromGlobsModel,
  type FromGlobsParamsModel,
} from '@lib/backend/file/utils/fromGlobs/fromGlobs.models';

export const fromGlobs = (...params: FromGlobsParamsModel): FromGlobsModel => _fromGlobs(...params);
