import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type SocketModel = EntityResourceModel & {
  connectionId: string;

  name?: string;
};

export type SocketFormModel = EntityResourceDataModel<SocketModel>;
