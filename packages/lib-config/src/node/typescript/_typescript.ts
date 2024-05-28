import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import {
  type _TypescriptConfigModel,
  type TypescriptConfigModel,
} from '@lib/config/node/typescript/typescript.models';
import reduce from 'lodash/reduce';
import { join } from 'path';
import {
  type JsxEmit,
  type ModuleKind,
  type ModuleResolutionKind,
  type ScriptTarget,
} from 'typescript';

export const _typescript = ({
  distDir,
  paths,
  rootDir,
  types,
}: TypescriptConfigModel): _TypescriptConfigModel => {
  const root = toRelative({ from: fromDist(), to: rootDir });
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
      moduleResolution: 'Bundler' as unknown as ModuleResolutionKind,
      noEmit: true,
      outDir: join(distDir, 'out-tsc'),
      paths: reduce(paths, (result, v, k) => ({ ...result, [k]: [v] }), {}),
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
