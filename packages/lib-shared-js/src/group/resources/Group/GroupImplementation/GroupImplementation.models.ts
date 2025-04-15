import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type GroupImplementationModel = EntityResourceImplementationModel<GroupModel>;
