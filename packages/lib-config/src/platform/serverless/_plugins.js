import { _plugins } from '../../../../lib-config/src/node/bundle/_plugins';
import { config } from '../../../../lib-config/src/node/bundle/bundle.base';
import { nodeRegister } from '../../../../lib-shared/src/core/utils/nodeRegister/nodeRegister';

nodeRegister();
module.exports = _plugins({ rootDirs: config().rootDirs });
