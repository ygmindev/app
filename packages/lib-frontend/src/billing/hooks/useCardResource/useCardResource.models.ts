import type { CardServiceModel } from '@lib/shared/billing/resources/Card/CardService/CardService.models';

export interface UseCardResourceModel
  extends Pick<CardServiceModel, 'create' | 'get' | 'getMany'> {}
