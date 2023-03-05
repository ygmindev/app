import { CARD_FIELDS } from '@lib/frontend/billing/hooks/useCardResource/useCardResource.constants';
import type {
  UseCardResourceModel,
  UseCardResourceParamsModel,
} from '@lib/frontend/billing/hooks/useCardResource/useCardResource.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const useCardResource = ({
  root,
}: UseCardResourceParamsModel = {}): UseCardResourceModel => {
  const { query: get } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET,
    CardModel,
    CardFormModel,
    UserModel
  >({
    fields: [{ result: CARD_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET,
    name: CARD_RESOURCE_NAME,
    root,
  });

  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    CardModel,
    CardFormModel,
    UserModel
  >({
    fields: [{ result: CARD_FIELDS }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: CARD_RESOURCE_NAME,
    root,
  });

  return {
    create,

    get,
  };
};
