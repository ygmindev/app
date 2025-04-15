import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { type ProtectedResourceImplementationModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResourceImplementation/ProtectedResourceImplementation.models';

export type AccessImplementationModel = ProtectedResourceImplementationModel<AccessModel>;
