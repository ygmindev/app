import {
  type UseCardResourceModel,
  type UseCardResourceParamsModel,
} from '@lib/frontend/billing/hooks/useCardResource/useCardResource.models';
import { CARD_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Card/Card.constants';
import { useOwnResource } from '@lib/frontend/user/hooks/useOwnResource/useOwnResource';
import { type CardModel } from '@lib/shared/billing/resources/Card/Card.models';

export const useCardResource = ({ root }: UseCardResourceParamsModel = {}): UseCardResourceModel =>
  useOwnResource<CardModel>({
    ...CARD_RESOURCE_PARAMS,
    root,
  });
