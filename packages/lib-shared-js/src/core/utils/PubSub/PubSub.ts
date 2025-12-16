import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { _PubSub } from '@lib/shared/core/utils/PubSub/_PubSub';
import { PubSubModel } from '@lib/shared/core/utils/PubSub/PubSub.models';

@withContainer()
export class PubSub<TType extends Record<string, unknown> = RootPubSubSchemaModel>
  extends _PubSub<TType>
  implements PubSubModel<TType> {}
