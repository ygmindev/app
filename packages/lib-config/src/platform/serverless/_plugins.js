import { _plugins } from '../../../../lib-config/src/node/bundle/_plugins';
import { PLATFORM } from '../../../../lib-platform/src/core/core.constants';
import { nodeRegister } from '../../../../lib-shared/src/core/utils/nodeRegister/nodeRegister';

nodeRegister();
module.exports = _plugins({ platform: PLATFORM.NODE });
