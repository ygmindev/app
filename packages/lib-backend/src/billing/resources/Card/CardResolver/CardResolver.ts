import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { Card } from '@lib/backend/billing/resources/Card/Card';
import { CardImplementation } from '@lib/backend/billing/resources/Card/CardImplementation/CardImplementation';
import { type CardResolverModel } from '@lib/backend/billing/resources/Card/CardResolver/CardResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { type CardFormModel, type CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: () => Card })
export class CardResolver
  extends createEmbeddedResourceResolver<CardModel, CardFormModel, UserModel>({
    Resource: () => Card,
    ResourceImplementation: CardImplementation,
    RootResource: () => User,
    authorizer: { default: selfAuthorizer() },
    name: CARD_RESOURCE_NAME,
  })
  implements CardResolverModel {}
