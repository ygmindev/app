import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { Card } from '@lib/backend/billing/resources/Card/Card';
import { CardService } from '@lib/backend/billing/resources/Card/CardService/CardService';
import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { CardServiceModel } from '@lib/shared/billing/resources/Card/CardService/CardService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: Card })
export class CardResolver
  extends EmbeddedResourceResolver<CardModel, CardFormModel, UserModel>({
    Resource: Card,
    ResourceService: CardService,
    RootResource: User,
    authorizer: { default: selfAuthorizer },
    name: CARD_RESOURCE_NAME,
  })
  implements CardServiceModel {}
