import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type LinkedUserModel = EntityResourceModel & {
  externalId: string;

  type: LINKED_USER_TYPE;
};

export enum LINKED_USER_TYPE {
  STRIPE = 'stripe',
}
