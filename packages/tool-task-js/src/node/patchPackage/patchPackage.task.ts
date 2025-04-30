import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { config as fileConfig } from '@lib/config/file/file';
import { PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import { config as pacakgeManagerConfig } from '@lib/config/node/packageManager/packageManager';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { execute } from '@tool/task/core/utils/execute/execute';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { type PatchPackageParamsModel } from '@tool/task/node/patchPackage/patchPackage.models';
import { readFileSync } from 'fs';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import uniq from 'lodash/uniq';

const patchPackage: TaskParamsModel<PatchPackageParamsModel> = {
  name: 'patch-package',

  options: async () => {
    const { packageDirs } = fileConfig.params();
    let options = await reduceSequence(
      packageDirs,
      async (result, v) => {
        const content = readFileSync(fromPackages(`${v}/package.json`), 'utf-8');
        const { name } = JSON.parse(content) as { name: string };
        const { listCommand } = pacakgeManagerConfig.params();
        const dependencies = JSON.parse(await execute({ command: listCommand(name) })) as Array<{
          dependencies?: Record<string, { version: string }>;
        }>;
        return [
          ...result,
          ...reduce(
            dependencies[0].dependencies,
            (rr, vv, kk) => [...rr, `${kk}@${vv.version}`],
            [] as Array<string>,
          ),
        ];
      },
      [] as Array<string>,
    );
    options = sort(uniq(options));
    options = options.filter((v) => !some(PACKAGE_PREFIXES, (p) => v.startsWith(`@${p}`)));
    return [{ key: 'package', options, type: PROMPT_TYPE.LIST }];
  },

  task: [
    ({ options }) => {
      const pkg = options?.package;
      console.warn(pkg);
      // return pkg && `pnpm patch ${pkg}`;
    },
  ],
};

export default patchPackage;
