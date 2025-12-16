import { pubSubConfig as configBase } from '@lib/config/pubSub/pubSub.base';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => ({}));

export { bundleConfig };
