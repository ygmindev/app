import { readFileSync } from 'fs';
import uniq from 'lodash/uniq';
import { type PackageJson } from 'type-fest';

import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { type GeneratorParamsModel } from '@tool/generate/tasks/generate/generate.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';

export const jsPackage: GeneratorParamsModel = {
  onSuccess: async ({ variables }) => {
    const root = variables && variables['{{ROOT}}'];
    const target = variables && variables['{{TARGET}}'];

    if (root && target) {
      // bundled dependencies
      const filename = fromRoot('package.json');
      const packageJson = JSON.parse(readFileSync(filename).toString()) as PackageJson;
      packageJson.bundledDependencies = [...(packageJson.bundledDependencies ?? []), target];
      packageJson.bundledDependencies = sort(uniq(packageJson.bundledDependencies));
      writeFile({ filename, value: stringify(packageJson) });
    }
  },

  prepare: async () => {
    const { name } = await prompt<{ name: string }>([{ key: 'name' }]);
    return { output: fromPackages(), variables: { '{{NAME}}': name, '{{ROOT}}': name } };
  },
};
