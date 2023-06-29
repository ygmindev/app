import { readFileSync } from 'fs';
import uniq from 'lodash/uniq';

import { fromBuild } from '#lib-backend/file/utils/fromBuild/fromBuild';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { writeFile } from '#lib-backend/file/utils/writeFile/writeFile';
import { sortKeys } from '#lib-shared/core/utils/sortKeys/sortKeys';
import { type GeneratorParamsModel } from '#tool-generate/tasks/generate/generate.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';

export const jsPackage: GeneratorParamsModel = {
  onSuccess: async ({ variables }) => {
    const root = variables && variables['{{ROOT}}'];
    const target = variables && variables['{{TARGET}}'];

    if (root && target) {
      let filename = fromBuild('node/typescript/tsconfig.paths.json');
      let content = JSON.parse(readFileSync(filename).toString());
      content.compilerOptions.paths[`${target}/*`] = [`packages/${root}/src/*`];
      content.compilerOptions.paths = sortKeys(content.compilerOptions.paths);
      writeFile({ filename, value: JSON.stringify(content, null, 2) });

      // bundled dependencies
      filename = fromRoot('package.json');
      content = JSON.parse(readFileSync(filename).toString());
      content.bundledDependencies = [...(content.bundledDependencies || []), target];
      content.bundledDependencies = uniq(content.bundledDependencies).sort();
      writeFile({ filename, value: JSON.stringify(content, null, 2) });

      // workspace
      filename = fromRoot('workspace.json');
      content = JSON.parse(readFileSync(filename).toString());
      content.projects[root] = fromPackages(root);
      content.projects = sortKeys(content.projects);
      writeFile({ filename, value: JSON.stringify(content, null, 2) });
    }
  },

  prepare: async () => {
    const { name } = await prompt([{ key: 'name' }]);
    return { output: fromPackages(), variables: { '{{NAME}}': name, '{{ROOT}}': name } };
  },
};
