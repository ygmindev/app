import { nodeRegister } from '../../../lib-shared-js/src/core/utils/nodeRegister/nodeRegister';
nodeRegister();

import { _plugins } from '@lib/config/node/bundle/_plugins';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.base';
module.exports = _plugins({ rootDirs: bundleConfig.params().rootDirs });
