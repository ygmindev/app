import { _JwtImplementation } from '@lib/backend/auth/utils/JwtImplementation/_JwtImplementation';
import { type JwtImplementationModel } from '@lib/backend/auth/utils/JwtImplementation/JwtImplementation.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { Container } from '@lib/shared/core/utils/Container/Container';

@withContainer()
export class JwtImplementation extends _JwtImplementation implements JwtImplementationModel {
  constructor() {
    const environment = Container.get(Environment);
    super({
      email: environment.variables.SERVER_FIREBASE_ADMIN_EMAIL,
      projectId: environment.variables.SERVER_FIREBASE_ADMIN_PROJECT_ID,
      secret: environment.variables.SERVER_FIREBASE_ADMIN_SECRET,
    });
  }
}
