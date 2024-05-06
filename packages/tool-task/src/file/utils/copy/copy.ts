import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { config } from '@lib/config/core/file/file';
import { type CopyParamsModel } from '@tool/task/file/utils/copy/copy.models';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'fs';
import every from 'lodash/every';
import forEach from 'lodash/forEach';
import { minimatch } from 'minimatch';
import { join } from 'path';

export const copy = async ({
  excludes = config.excludePatterns,
  from,
  includes,
  isOverwrite,
  overrides,
  to,
}: CopyParamsModel): Promise<void> => {
  let toF = to;
  if (
    existsSync(from) &&
    ((!excludes && !includes) || every(excludes.map((pattern) => !minimatch(toF, pattern))))
  ) {
    overrides && forEach(overrides, (v, k) => (toF = toF.replaceAll(k, v)));
    if (statSync(from).isDirectory()) {
      existsSync(toF) && isOverwrite && rmSync(toF, { force: true, recursive: true });
      !existsSync(toF) && mkdirSync(toF, { recursive: true });
      for (const child of readdirSync(from)) {
        await copy({ from: join(from, child), isOverwrite, overrides, to: join(toF, child) });
      }
    } else if (isOverwrite || !existsSync(toF)) {
      const encoding = toF.match(/\.(jpg|jpeg|png|gif)$/i) ? 'base64' : 'utf8';
      let fileF = readFileSync(from, encoding);
      overrides && forEach(overrides, (v, k) => (fileF = fileF.replaceAll(k, v)));
      writeFile({ encoding, filename: toF, value: fileF });
    }
  }
};
