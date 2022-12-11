import { Card } from '@lib/backend/billing/resources/Card/Card';
import { CardService } from '@lib/backend/billing/resources/Card/CardService/CardService';
import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import type { EmbeddedResourceResolverModel } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.models';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: Card })
export class CardResolver
  extends EmbeddedResourceResolver<CardModel, CardFormModel, UserModel>({
    Resource: Card,
    ResourceService: CardService,
    RootResource: User,
    getAccess: ACCESS_LEVEL.PUBLIC,
    name: CARD_RESOURCE_NAME,
  })
  implements EmbeddedResourceResolverModel<CardModel, CardFormModel, UserModel>
{
  @withOutput({
    Resource: String,
    RootResource: User,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: `${CARD_RESOURCE_NAME}Token`,
  })
  async createToken(
    @withInput({
      RootResource: User,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: `${CARD_RESOURCE_NAME}Token`,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, undefined, undefined, UserModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
    return Container.get(CardService).createToken(input);
  }
}
