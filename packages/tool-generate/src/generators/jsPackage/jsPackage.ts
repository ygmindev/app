import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { sortKeys } from '@lib/shared/core/utils/sortKeys/sortKeys';
import type { GeneratorParamsModel } from '@tool/generate/tasks/generate/generate.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { readFileSync, writeFileSync } from 'fs';
import uniq from 'lodash/uniq';

export const jsPackage: GeneratorParamsModel = {
  onSuccess: async ({ variables }) => {
    const root = variables && variables['{{ROOT}}'];
    const target = variables && variables['{{TARGET}}'];

    if (root && target) {
      // typescript paths
      let dir = fromConfig('node/typescript/tsconfig.paths.json');
      let content = JSON.parse(readFileSync(dir).toString());
      content.compilerOptions.paths[`${target}/*`] = [`packages/${root}/src/*`];
      content.compilerOptions.paths = sortKeys(content.compilerOptions.paths);
      writeFileSync(dir, JSON.stringify(content, null, 2));

      // bundled dependencies
      dir = fromRoot('package.json');
      content = JSON.parse(readFileSync(dir).toString());
      content.bundledDependencies = [...(content.bundledDependencies || []), target];
      content.bundledDependencies = uniq(content.bundledDependencies).sort();
      writeFileSync(dir, JSON.stringify(content, null, 2));

      // workspace
      dir = fromRoot('workspace.json');
      content = JSON.parse(readFileSync(dir).toString());
      content.projects[root] = fromPackages(root);
      content.projects = sortKeys(content.projects);
      writeFileSync(dir, JSON.stringify(content, null, 2));
    }
  },

  prepare: async () => {
    const { name } = await prompt([{ key: 'name' }]);
    return { output: fromPackages(), variables: { '{{NAME}}': name, '{{ROOT}}': name } };
  },
};
