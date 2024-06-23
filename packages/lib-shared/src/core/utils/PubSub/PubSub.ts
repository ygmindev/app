import { _PubSub } from '@lib/shared/core/utils/PubSub/_PubSub';

export class PubSub extends _PubSub {}

export const pubsub = new PubSub();
