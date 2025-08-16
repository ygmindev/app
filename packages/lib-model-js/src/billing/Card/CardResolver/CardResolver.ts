import { Card } from '@lib/model/billing/Card/Card.entity';
import { CardImplementation } from '@lib/model/billing/Card/CardImplementation/CardImplementation';
import { type CardResolverModel } from '@lib/model/billing/Card/CardResolver/CardResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { User } from '@lib/model/user/User/User.entity';
import { CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { type UserModel } from '@lib/model/user/User/User.models';

@withContainer()
@withResolver({ Resource: () => Card })
export class CardResolver
  extends createEmbeddedResourceResolver<CardModel, UserModel>({
    Resource: () => Card,
    ResourceImplementation: CardImplementation,
    RootResource: () => User,
    name: CARD_RESOURCE_NAME,
  })
  implements CardResolverModel {}
