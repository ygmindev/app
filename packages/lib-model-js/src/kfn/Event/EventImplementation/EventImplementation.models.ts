import { type EventModel } from '@lib/model/kfn/Event/Event.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type EventImplementationModel = EntityResourceImplementationModel<EventModel>;
