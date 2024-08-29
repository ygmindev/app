import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type SocketModel = EntityResourceModel & {
  connections: Array<string>;

  name?: string;
};

export type SocketFormModel = EntityResourceDataModel<SocketModel>;
