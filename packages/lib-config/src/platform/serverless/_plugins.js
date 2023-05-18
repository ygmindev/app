import { _plugins } from '../../../../lib-config/src/node/bundle/_plugins';
import { nodeRegister } from '../../../../lib-shared/src/core/utils/nodeRegister/nodeRegister';
import { PLATFORM } from '../../../../lib-shared/src/platform/platform.constants';

nodeRegister();
module.exports = _plugins({ platform: PLATFORM.NODE });
