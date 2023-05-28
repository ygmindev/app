import { _fromGlobs } from '@lib/backend/file/utils/fromGlobs/_fromGlobs';
import { FromGlobsModel, FromGlobsParamsModel } from '@lib/backend/file/utils/fromGlobs/fromGlobs.models';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';

export const fromGlobs = ({...params}: FromGlobsParamsModel): FromGlobsModel =>
  _fromGlobs({...params});
