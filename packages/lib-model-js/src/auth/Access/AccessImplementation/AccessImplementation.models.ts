import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { type ProtectedResourceImplementationModel } from '@lib/model/auth/ProtectedResource/ProtectedResourceImplementation/ProtectedResourceImplementation.models';

export type AccessImplementationModel = ProtectedResourceImplementationModel<AccessModel>;
