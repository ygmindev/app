import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { type RenameParamsModel } from '@tool/task/core/utils/rename/rename.models';
import { existsSync, mkdirSync, readdirSync, renameSync, statSync } from 'fs';
import { resolve } from 'path';

export const rename = async ({ from, path, to }: RenameParamsModel): Promise<void> => {
  for (const filename of readdirSync(path)) {
    const filepath = resolve(path, filename);
    const stat = statSync(filepath);
    if (stat.isDirectory()) {
      await rename({ from, path: filepath, to });
    } else {
      const pathNew = filepath.replaceAll(from, to);
      const { dirname } = fileInfo(pathNew);
      !existsSync(dirname) && mkdirSync(dirname, { recursive: true });
      renameSync(filepath, pathNew);
    }
  }
};
