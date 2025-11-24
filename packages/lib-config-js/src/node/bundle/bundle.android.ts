import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.native';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => ({}));

export { bundleConfig };
