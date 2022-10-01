import type { CopyParamsModel } from '@lib/backend/file/utils/copy/copy.models';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'fs';
import { forEach } from 'lodash';
import { join } from 'path';

export const copy = async ({
  from,
  isOverwrite,
  overrides,
  to,
}: CopyParamsModel): Promise<void> => {
  let _to = to;
  overrides && forEach(overrides, (v, k) => (_to = _to.replaceAll(k, v)));
  if (statSync(from).isDirectory()) {
    existsSync(_to) ? isOverwrite && rmSync(_to, { force: true, recursive: true }) : mkdirSync(_to);
    for (const child of readdirSync(from)) {
      await copy({ from: join(from, child), isOverwrite, overrides, to: join(_to, child) });
    }
  } else if (isOverwrite || !existsSync(_to)) {
    let _file = readFileSync(from, 'utf8');
    overrides && forEach(overrides, (v, k) => (_file = _file.replaceAll(k, v)));
    writeFileSync(_to, _file);
  }
};
