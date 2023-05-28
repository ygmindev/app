import { config } from '@lib/config/core/file/file';
import type { CopyParamsModel } from '@tool/task/file/utils/copy/copy.models';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
} from 'fs';
import every from 'lodash/every';
import forEach from 'lodash/forEach';
import { minimatch } from 'minimatch';
import { resolve } from 'path';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';

export const copy = async ({
  excludes = config.excludePatterns,
  from,
  isOverwrite,
  overrides,
  to,
}: CopyParamsModel): Promise<void> => {
  let _to = to;
  if (!excludes || every(excludes.map((pattern) => !minimatch(_to, pattern)))) {
    overrides && forEach(overrides, (v, k) => (_to = _to.replaceAll(k, v)));
    if (statSync(from).isDirectory()) {
      existsSync(_to)
        ? isOverwrite && rmSync(_to, { force: true, recursive: true })
        : mkdirSync(_to);
      for (const child of readdirSync(from)) {
        await copy({ from: resolve(from, child), isOverwrite, overrides, to: resolve(_to, child) });
      }
    } else if (isOverwrite || !existsSync(_to)) {
      let _file = readFileSync(from, 'utf8');
      overrides && forEach(overrides, (v, k) => (_file = _file.replaceAll(k, v)));
      writeFile({ filename: _to, value: _file });
    }
  }
};
