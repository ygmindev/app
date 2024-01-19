import { _writeFile } from '@lib/backend/file/utils/writeFile/_writeFile';
import {
  type WriteFileModel,
  type WriteFileParamsModel,
} from '@lib/backend/file/utils/writeFile/writeFile.models';

export const writeFile = (params: WriteFileParamsModel): WriteFileModel => _writeFile(params);
