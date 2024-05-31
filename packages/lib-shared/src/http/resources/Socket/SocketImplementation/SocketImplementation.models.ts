import {
  type SocketFormModel,
  type SocketModel,
} from '@lib/shared/http/resources/Socket/Socket.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type SocketImplementationModel = EntityResourceImplementationModel<
  SocketModel,
  SocketFormModel
>;
