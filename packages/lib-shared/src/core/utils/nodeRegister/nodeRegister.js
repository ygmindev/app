require('tsconfig-paths').register({ addMatchAll: false });
require('ts-node').register({
  compilerOptions: { module: 'nodenext', types: [] },
  esm: true,
  files: false,
  swc: true,
  transpileOnly: true,
  typeCheck: false,
});
