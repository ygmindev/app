import { MoveFileParamsModel, MoveFileModel } from '@lib/backend/file/utils/moveFile/moveFile.models';
import { existsSync, mkdirSync, renameSync } from 'fs';
import { dirname } from 'path';

export const moveFile = ({ from, to }: MoveFileParamsModel): MoveFileModel => {
  const directory = dirname(to);
  !existsSync(directory) && mkdirSync(directory, { recursive: true });
  renameSync(from, to);
};
