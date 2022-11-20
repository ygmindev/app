import { EmbeddedResourceService } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { CardServiceModel } from '@lib/shared/billing/resources/Card/CardService/CardService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
export class CardService
  extends EmbeddedResourceService<CardModel, CardFormModel, UserModel, UserFormModel>({
    RootService: UserService,
    name: CARD_RESOURCE_NAME,
  })
  implements CardServiceModel {}
