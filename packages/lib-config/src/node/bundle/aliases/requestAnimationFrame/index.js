import 'setimmediate';

import { polyfill } from 'raf';

const _polyfill = {};
polyfill(_polyfill);

export default _polyfill.requestAnimationFrame;
