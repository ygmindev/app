import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type MoveParamsModel } from '@tool/task/file/utils/move/move.models';
import { existsSync, mkdirSync, renameSync } from 'fs';
import { basename } from 'path';

export const move = ({ filename, from, to }: MoveParamsModel): void => {
  !existsSync(to) && mkdirSync(to, { recursive: true });
  const filenameF = filename ?? basename(from);
  renameSync(from, joinPaths([to, filenameF]));
};
