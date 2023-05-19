require('tsconfig-paths').register({ addMatchAll: false });

module.exports.nodeRegister = ({ module = 'commonjs' } = {}) => {
  require('ts-node').register({
    compilerOptions: { module, types: [] },
    esm: true,
    experimentalSpecifierResolution: 'node',
    files: false,
    swc: true,
    transpileOnly: true,
    typeCheck: false,
  });
};
