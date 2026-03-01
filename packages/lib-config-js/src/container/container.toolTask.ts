import { containerConfig as configBase } from '@lib/config/container/container.node';

export const containerConfig = configBase.extend(() => ({
  image: 'tool_task',
}));
