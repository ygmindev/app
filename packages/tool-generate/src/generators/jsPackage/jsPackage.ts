import { readFileSync } from 'fs';
import uniq from 'lodash/uniq';
import { type PackageJson } from 'type-fest';
import { type TranspileOptions } from 'typescript';

import { fromDist } from '#lib-backend/file/utils/fromDist/fromDist';
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
      let filename = fromDist('node/typescript/tsconfig.paths.json');
      const tsConfig = JSON.parse(readFileSync(filename).toString()) as TranspileOptions;
      if (tsConfig.compilerOptions?.paths) {
        tsConfig.compilerOptions.paths[`${target}/*`] = [`packages/${root}/src/*`];
        tsConfig.compilerOptions.paths = sortKeys(tsConfig.compilerOptions.paths);
        writeFile({ filename, value: JSON.stringify(tsConfig, null, 2) });
      }

      // bundled dependencies
      filename = fromRoot('package.json');
      const packageJson = JSON.parse(readFileSync(filename).toString()) as PackageJson;
      packageJson.bundledDependencies = [...(packageJson.bundledDependencies || []), target];
      packageJson.bundledDependencies = uniq(packageJson.bundledDependencies).sort();
      writeFile({ filename, value: JSON.stringify(tsConfig, null, 2) });

      // workspace
      filename = fromRoot('workspace.json');
      const workspaceJson = JSON.parse(readFileSync(filename).toString());
      workspaceJson.projects[root] = fromPackages(root);
      workspaceJson.projects = sortKeys(workspaceJson.projects);
      writeFile({ filename, value: JSON.stringify(tsConfig, null, 2) });
    }
  },

  prepare: async () => {
    const { name } = await prompt([{ key: 'name' }]);
    return { output: fromPackages(), variables: { '{{NAME}}': name, '{{ROOT}}': name } };
  },
};
