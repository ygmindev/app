import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type SocketModel = EntityResourceModel & {
  connections: Array<string>;

  name?: string;
};
