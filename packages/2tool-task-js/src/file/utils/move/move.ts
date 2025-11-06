import { type MoveParamsModel } from '@tool/task/file/utils/move/move.models';
import { existsSync, mkdirSync, renameSync } from 'fs';
import { dirname } from 'path';

export const move = ({ from, to }: MoveParamsModel): void => {
  const directory = dirname(to);
  !existsSync(directory) && mkdirSync(directory, { recursive: true });
  renameSync(from, to);
};
