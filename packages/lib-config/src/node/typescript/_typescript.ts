import { readFileSync } from 'fs';
import reduce from 'lodash/reduce';
import type { JsxEmit, ModuleKind, ModuleResolutionKind, ScriptTarget } from 'typescript';

import { fromBuild } from '#lib-backend/file/utils/fromBuild/fromBuild';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { packages } from '#lib-backend/file/utils/packages/packages';
import { toRelative } from '#lib-backend/file/utils/toRelative/toRelative';
import type {
  _TypescriptConfigModel,
  TypescriptConfigModel,
} from '#lib-config/node/typescript/typescript.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';

export const _typescript = ({
  outDir,
  paths,
  rootDir,
  types,
}: TypescriptConfigModel): ReturnTypeModel<_TypescriptConfigModel> => {
  const root = toRelative({ from: fromBuild(), to: rootDir });
  return {
    compilerOptions: {
      allowJs: true,
      allowSyntheticDefaultImports: true,
      alwaysStrict: true,
      baseUrl: root,
      emitDecoratorMetadata: true,
      esModuleInterop: true,
      experimentalDecorators: true,
      forceConsistentCasingInFileNames: true,
      importHelpers: true,
      incremental: true,
      inlineSourceMap: true,
      isolatedModules: false,
      jsx: 'react-jsx' as unknown as JsxEmit,
      lib: ['esnext', 'esnext.asynciterable', 'dom', 'dom.iterable'],
      module: 'esnext' as unknown as ModuleKind,
      moduleResolution: 'node' as unknown as ModuleResolutionKind,
      noEmit: true,
      outDir,
      paths: {
        ...reduce(paths, (result, v, k) => ({ ...result, [k]: [v] }), {}),
        ...reduce(
          packages,
          (result, v) => {
            const packageJson = JSON.parse(
              readFileSync(fromPackages(v, 'package.json')).toString(),
            ) as { name: string };
            return { ...result, [`${packageJson.name}/*`]: [`packages/${v}/src/*`] };
          },
          {},
        ),
      },
      resolveJsonModule: true,
      rootDir: root,
      skipDefaultLibCheck: true,
      skipLibCheck: true,
      strict: true,
      target: 'esnext' as unknown as ScriptTarget,
      types,
    },
    'ts-node': {
      compilerOptions: { module: 'commonjs' },
      require: ['tsconfig-paths/register'],
      swc: true,
      transpileOnly: true,
    },
  };
};
