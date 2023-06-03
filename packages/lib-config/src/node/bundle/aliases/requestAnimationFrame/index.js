import 'setimmediate';

import { polyfill } from 'raf';

const result = {};
polyfill(result);

export default result.requestAnimationFrame;
