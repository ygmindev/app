import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { sortKeys } from '@lib/shared/core/utils/sortKeys/sortKeys';
import type { GeneratorParamsModel } from '@tool/generate/tasks/generate/generate.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { readFileSync } from 'fs';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import uniq from 'lodash/uniq';

export const jsPackage: GeneratorParamsModel = {
  onSuccess: async ({ variables }) => {
    const root = variables && variables['{{ROOT}}'];
    const target = variables && variables['{{TARGET}}'];

    if (root && target) {
      // typescript paths
      let _filename = fromConfig('node/typescript/tsconfig.paths.json');
      let content = JSON.parse(readFileSync(_filename).toString());
      content.compilerOptions.paths[`${target}/*`] = [`packages/${root}/src/*`];
      content.compilerOptions.paths = sortKeys(content.compilerOptions.paths);
      writeFile({ filename: _filename, value: JSON.stringify(content, null, 2) });

      // bundled dependencies
      _filename = fromRoot('package.json');
      content = JSON.parse(readFileSync(_filename).toString());
      content.bundledDependencies = [...(content.bundledDependencies || []), target];
      content.bundledDependencies = uniq(content.bundledDependencies).sort();
      writeFile({ filename: _filename, value: JSON.stringify(content, null, 2) });

      // workspace
      _filename = fromRoot('workspace.json');
      content = JSON.parse(readFileSync(_filename).toString());
      content.projects[root] = fromPackages(root);
      content.projects = sortKeys(content.projects);
      writeFile({ filename: _filename, value: JSON.stringify(content, null, 2) });
    }
  },

  prepare: async () => {
    const { name } = await prompt([{ key: 'name' }]);
    return { output: fromPackages(), variables: { '{{NAME}}': name, '{{ROOT}}': name } };
  },
};
