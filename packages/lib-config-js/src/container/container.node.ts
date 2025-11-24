import { containerConfig as configBase } from '@lib/config/container/container.base';

let containerConfig = configBase;

containerConfig = containerConfig.extend(() => ({}));

export { containerConfig };
