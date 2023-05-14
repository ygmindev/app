require('tsconfig-paths').register({ addMatchAll: false });

module.exports.nodeRegister = ({ module = 'commonjs', target = 'esnext' } = {}) => {
  require('ts-node').register({
    compilerOptions: { module, target },
    esm: true,
    experimentalSpecifierResolution: 'node',
    files: false,
    swc: true,
    transpileOnly: true,
    typeCheck: false,
  });
};
