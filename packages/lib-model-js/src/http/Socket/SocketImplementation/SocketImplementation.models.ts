import { type SocketModel } from '@lib/model/http/Socket/Socket.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type SocketImplementationModel = EntityResourceImplementationModel<SocketModel>;
