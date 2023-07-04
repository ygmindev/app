import { Card } from '#lib-backend/billing/resources/Card/Card';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { CARD_RESOURCE_NAME } from '#lib-shared/billing/resources/Card/Card.constants';
import { type CardFormModel, type CardModel } from '#lib-shared/billing/resources/Card/Card.models';
import { type CardServiceModel } from '#lib-shared/billing/resources/Card/CardService/CardService.models';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
export class CardService
  extends createEmbeddedResourceService<CardModel, CardFormModel, UserModel, UserFormModel>({
    Resource: Card,
    RootService: UserService,
    name: CARD_RESOURCE_NAME,
  })
  implements CardServiceModel {}
