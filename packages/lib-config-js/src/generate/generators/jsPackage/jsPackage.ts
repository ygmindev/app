import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { type GeneratorParamsModel } from '@lib/config/generate/generate.models';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import uniq from 'lodash/uniq';

export const jsPackage: GeneratorParamsModel = {
  onSuccess: async ({ variables }) => {
    const root = variables?.['{{ROOT}}'];
    const target = variables?.['{{TARGET}}'];

    if (root && target) {
      const pathname = fromRoot('package.json');
      const value = packageInfo(fromRoot());
      value.bundledDependencies = [...(value.bundledDependencies ?? []), target];
      value.bundledDependencies = sort(uniq(value.bundledDependencies));
      writeFile({ pathname, value: stringify(value) });
    }
  },

  prepare: async () => {
    const { name } = await prompt<{ name: string }>([{ key: 'name' }]);
    return { output: fromPackages(), variables: { '{{NAME}}': name, '{{ROOT}}': name } };
  },
};
