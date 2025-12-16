import { pubSubConfig as configBase } from '@lib/config/pubSub/pubSub.base';

let pubSubConfig = configBase;

pubSubConfig = pubSubConfig.extend(() => ({}));

export { pubSubConfig };
