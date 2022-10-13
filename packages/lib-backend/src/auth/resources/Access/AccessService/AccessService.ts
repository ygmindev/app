import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessFormModel, AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import type { AccessServiceModel } from '@lib/shared/auth/resources/Access/AccessService/AccessService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';

@withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
export class AccessService
  extends EntityResourceService<AccessModel, AccessFormModel>({
    beforeCreate: async ({ input }) => {
      if (input.form._uid) {
        return input;
      }
      if (input.form.email) {
        const { result } = await Container.get(UserService).get({
          filter: { email: input.form.email },
        });
        if (result) {
          input.form._uid = result._id;
          return input;
        }
        throw new NotFoundError(`user ${input.form.email}`);
      }
      throw new InvalidArgumentError('user email');
    },
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessServiceModel {}
