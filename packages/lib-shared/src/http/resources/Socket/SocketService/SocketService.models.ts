import {
  type SocketFormModel,
  type SocketModel,
} from '#lib-shared/http/resources/Socket/Socket.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type SocketServiceModel = EntityResourceServiceModel<SocketModel, SocketFormModel>;
