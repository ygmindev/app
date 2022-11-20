import { Card } from '@lib/backend/billing/resources/Card/Card';
import { CardService } from '@lib/backend/billing/resources/Card/CardService/CardService';
import { withFieldResolver } from '@lib/backend/graphql/decorators/withFieldResolver/withFieldResolver';
import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { withSelf } from '@lib/backend/graphql/decorators/withSelf/withSelf';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import type { EmbeddedResourceResolverModel } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.models';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: Card })
export class CardResolver
  extends EmbeddedResourceResolver<CardModel, CardFormModel, UserModel>({
    Resource: Card,
    ResourceService: CardService,
    RootResource: User,
    createAccess: ACCESS_LEVEL.PUBLIC,
    getAccess: ACCESS_LEVEL.PUBLIC,
    name: CARD_RESOURCE_NAME,
  })
  implements EmbeddedResourceResolverModel<CardModel, CardFormModel, UserModel>
{
  @withFieldResolver({ Resource: User })
  async exp(@withSelf() card: Card): Promise<string | undefined> {
    return card.expMonth && card.expYear ? `${card.expMonth}/${card.expYear}` : undefined;
  }
}
