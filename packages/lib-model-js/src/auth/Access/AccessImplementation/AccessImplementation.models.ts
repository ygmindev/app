import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type AccessImplementationModel = EntityResourceImplementationModel<AccessModel>;
