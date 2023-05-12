require('tsconfig-paths').register({ addMatchAll: false });
require('ts-node').register({
  compilerOptions: { module: 'commonjs', types: [] },
  esm: true,
  files: false,
  swc: true,
  transpileOnly: true,
  typeCheck: false,
});
