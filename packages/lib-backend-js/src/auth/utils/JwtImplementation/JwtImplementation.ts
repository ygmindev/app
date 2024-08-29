import { _JwtImplementation } from '@lib/backend/auth/utils/JwtImplementation/_JwtImplementation';
import { type JwtImplementationModel } from '@lib/backend/auth/utils/JwtImplementation/JwtImplementation.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';

@withContainer()
export class JwtImplementation extends _JwtImplementation implements JwtImplementationModel {}
