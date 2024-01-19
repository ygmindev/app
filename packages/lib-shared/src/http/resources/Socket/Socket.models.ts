import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type SocketModel = EntityResourceModel & {
  externalId: string;

  name?: string;
};

export type SocketFormModel = EntityResourceDataModel<SocketModel>;
