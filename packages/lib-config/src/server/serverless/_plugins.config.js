const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { join } = require('path');

module.exports = [
  nodeExternalsPlugin({
    packagePath: join(__dirname, '../../../../../package.json'),
  }),
];
