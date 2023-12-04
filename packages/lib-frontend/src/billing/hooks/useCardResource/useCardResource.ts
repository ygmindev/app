import { type UseCardResourceModel } from '#lib-frontend/billing/hooks/useCardResource/useCardResource.models';
import { CARD_RESOURCE_PARAMS } from '#lib-frontend/billing/resources/Card/Card.constants';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { type CardFormModel, type CardModel } from '#lib-shared/billing/resources/Card/Card.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const useCardResource = (): UseCardResourceModel =>
  useResource<CardModel, CardFormModel, UserModel>({
    ...CARD_RESOURCE_PARAMS,
  });
