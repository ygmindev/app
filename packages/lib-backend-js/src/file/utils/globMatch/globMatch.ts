import { _globMatch } from '@lib/backend/file/utils/globMatch/_globMatch';
import {
  type GlobMatchModel,
  type GlobMatchParamsModel,
} from '@lib/backend/file/utils/globMatch/globMatch.models';

export const globMatch = (...params: GlobMatchParamsModel): GlobMatchModel => _globMatch(...params);
