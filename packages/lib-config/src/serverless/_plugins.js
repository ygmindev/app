import { nodeRegister } from '../../../lib-shared/src/core/utils/nodeRegister/nodeRegister';
import { _plugins } from '../node/bundle/_plugins';
import bundleConfig from '../node/bundle/bundle.base';

nodeRegister();
module.exports = _plugins({ rootDirs: bundleConfig.params().rootDirs });
