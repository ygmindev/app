import type { CopyParamsModel } from '@lib/backend/file/utils/copy/copy.models';
import { EXCLUDE_PATTERNS } from '@lib/shared/file/file.constants';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'fs';
import { every, forEach } from 'lodash';
import minimatch from 'minimatch';
import { join } from 'path';

export const copy = async ({
  from,
  isOverwrite,
  overrides,
  excludes = EXCLUDE_PATTERNS,
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
        await copy({ from: join(from, child), isOverwrite, overrides, to: join(_to, child) });
      }
    } else if (isOverwrite || !existsSync(_to)) {
      let _file = readFileSync(from, 'utf8');
      overrides && forEach(overrides, (v, k) => (_file = _file.replaceAll(k, v)));
      writeFileSync(_to, _file);
    }
  }
};
