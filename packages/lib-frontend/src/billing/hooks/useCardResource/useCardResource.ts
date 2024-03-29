import {
  type UseCardResourceModel,
  type UseCardResourceParamsModel,
} from '@lib/frontend/billing/hooks/useCardResource/useCardResource.models';
import { CARD_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Card/Card.constants';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useOwnResource } from '@lib/frontend/user/hooks/useOwnResource/useOwnResource';
import { type CardFormModel, type CardModel } from '@lib/shared/billing/resources/Card/Card.models';

export const useCardResource = ({
  root,
}: UseCardResourceParamsModel = {}): UseCardResourceModel => {
  const actions = useActions();
  return useOwnResource<CardModel, CardFormModel>({
    ...CARD_RESOURCE_PARAMS,
    afterRemove: async ({ output }) => {
      actions?.billing.paymentMethodsRemove({ _id: output.result?._id });
      return output;
    },
    root,
  });
};
