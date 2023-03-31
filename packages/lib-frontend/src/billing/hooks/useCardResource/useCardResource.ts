import { CARD_OUTPUT_FIELDS } from '@lib/frontend/billing/hooks/useCardResource/useCardResource.constants';
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
    fields: CARD_OUTPUT_FIELDS,
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
    fields: CARD_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: CARD_RESOURCE_NAME,
    root,
  });

  const { query: update } = useResourceMethod<
    RESOURCE_METHOD_TYPE.UPDATE,
    CardModel,
    CardFormModel,
    UserModel
  >({
    fields: CARD_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.UPDATE,
    name: CARD_RESOURCE_NAME,
    root,
  });

  const { query: remove } = useResourceMethod<
    RESOURCE_METHOD_TYPE.REMOVE,
    CardModel,
    CardFormModel,
    UserModel
  >({
    fields: CARD_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.REMOVE,
    name: CARD_RESOURCE_NAME,
    root,
  });

  return {
    create,

    get,

    remove,

    update,
  };
};
