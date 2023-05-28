import type {
  _WriteFileModel,
  _WriteFileParamsModel,
} from '@lib/backend/file/utils/writeFile/_writeFile.models';
import { outputFileSync } from 'fs-extra';

export const _writeFile = ({ filename, value}: _WriteFileParamsModel): _WriteFileModel => outputFileSync(filename, value);
