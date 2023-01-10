const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { join } = require('path');
const { bundleConfig } = require('../../javascript/bundle/bundle.config');

module.exports = [
  ...bundleConfig.optimizeDeps.esbuildOptions.plugins,

  nodeExternalsPlugin({
    packagePath: join(__dirname, '../../../../../package.json'),
  }),
];
