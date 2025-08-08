import {
  type _GlobMatchModel,
  type _GlobMatchParamsModel,
} from '@lib/backend/file/utils/globMatch/_globMatch.models';
import picomatch from 'picomatch';

export const _globMatch = (...[value, glob]: _GlobMatchParamsModel): _GlobMatchModel =>
  picomatch(glob)(value);
