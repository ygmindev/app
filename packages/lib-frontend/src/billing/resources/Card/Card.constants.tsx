import { type ResourceParamsModel } from '@lib-frontend/resource/resource.models';
import { CARD_RESOURCE_NAME } from '@lib-shared/billing/resources/Card/Card.constants';
import { type CardModel } from '@lib-shared/billing/resources/Card/Card.models';
import { USER_RESOURCE_NAME } from '@lib-shared/user/resources/User/User.constants';
import { type UserModel } from '@lib-shared/user/resources/User/User.models';

export const CARD_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'name' },
    { id: 'expMonth' },
    { id: 'expYear' },
    { id: 'funding' },
    { id: 'externalId' },
    { id: 'last4' },
  ],
  name: CARD_RESOURCE_NAME,
  rootName: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<CardModel, UserModel>;
