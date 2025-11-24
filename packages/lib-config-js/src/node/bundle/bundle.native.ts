import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.base';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => ({}));

export { bundleConfig };
