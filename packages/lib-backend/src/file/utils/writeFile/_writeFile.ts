import {
  type _WriteFileModel,
  type _WriteFileParamsModel,
} from '@lib/backend/file/utils/writeFile/_writeFile.models';
import { outputFileSync } from 'fs-extra';

export const _writeFile = ({
  encoding = 'utf8',
  filename,
  value,
}: _WriteFileParamsModel): _WriteFileModel => outputFileSync(filename, value, encoding);
