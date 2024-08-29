import { type MoveParamsModel } from '@tool/task/file/utils/move/move.models';
import { existsSync, mkdirSync, renameSync } from 'fs';

export const move = ({ from, to }: MoveParamsModel): void => {
  !existsSync(to) && mkdirSync(to, { recursive: true });
  renameSync(from, to);
};
