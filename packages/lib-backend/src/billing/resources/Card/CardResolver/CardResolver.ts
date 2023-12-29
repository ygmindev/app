import { Card } from '#lib-backend/billing/resources/Card/Card';
import { type CardResolverModel } from '#lib-backend/billing/resources/Card/CardResolver/CardResolver.models';
import { CardService } from '#lib-backend/billing/resources/Card/CardService/CardService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { User } from '#lib-backend/user/resources/User/User';
import { ACCESS_LEVEL } from '#lib-shared/auth/resources/Access/Access.constants';
import { CARD_RESOURCE_NAME } from '#lib-shared/billing/resources/Card/Card.constants';
import { type CardFormModel, type CardModel } from '#lib-shared/billing/resources/Card/Card.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: () => Card })
export class CardResolver
  extends createEmbeddedResourceResolver<CardModel, CardFormModel, UserModel>({
    Resource: () => Card,
    ResourceService: CardService,
    RootResource: () => User,
    // authorizer: { default: selfAuthorizer() },
    access: { default: ACCESS_LEVEL.PUBLIC },
    name: CARD_RESOURCE_NAME,
  })
  implements CardResolverModel {}
