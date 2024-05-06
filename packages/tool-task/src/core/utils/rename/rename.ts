import { type RenameParamsModel } from '@tool/task/core/utils/rename/rename.models';
import { readdirSync, renameSync, statSync } from 'fs';
import { resolve } from 'path';

export const rename = async ({ from, path, to }: RenameParamsModel): Promise<void> => {
  for (const filename of readdirSync(path)) {
    const filepath = resolve(path, filename);
    const stat = statSync(filepath);
    if (stat.isDirectory()) {
      await rename({ from, path: filepath, to });
    } else if (filename === from) {
      renameSync(filepath, resolve(path, to));
    }
  }
};
