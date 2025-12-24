import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';

export type PubSubModel = _PubSubModel<RootPubSubSchemaModel>;
