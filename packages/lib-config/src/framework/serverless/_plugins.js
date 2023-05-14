import sp from 'synchronized-promise';

import { nodeRegister } from '../../../../lib-shared/src/core/utils/nodeRegister/nodeRegister';
import { plugins } from './_plugins.ts';

nodeRegister({ module: 'esnext' });

module.exports = (async function () {
    return [];
})();
    
