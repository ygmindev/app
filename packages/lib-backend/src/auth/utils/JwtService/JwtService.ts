import { _JwtService } from '@lib-backend/auth/utils/JwtService/_JwtService';
import { type JwtServiceModel } from '@lib-backend/auth/utils/JwtService/JwtService.models';
import { withContainer } from '@lib-backend/core/utils/withContainer/withContainer';

@withContainer()
export class JwtService extends _JwtService implements JwtServiceModel {}
