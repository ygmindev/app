import { StripeAdminService } from '@lib/backend/billing/utils/StripeAdminService/StripeAdminService';
import { EmbeddedResourceService } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { LinkedUserService } from '@lib/backend/user/resources/LinkedUser/LinkedUserService/LinkedUserService';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { CardServiceModel } from '@lib/shared/billing/resources/Card/CardService/CardService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { withInject } from '@lib/shared/core/decorators/withInject/withInject';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { LINKED_USER_TYPE } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
export class CardService
  extends EmbeddedResourceService<CardModel, CardFormModel, UserModel, UserFormModel>({
    RootService: UserService,
    name: CARD_RESOURCE_NAME,
  })
  implements CardServiceModel
{
  @withInject(LinkedUserService) protected _linkedUserService!: LinkedUserService;

  @withInject(StripeAdminService) protected _stripeAdminService!: StripeAdminService;

  async createToken({
    root,
  }: InputModel<RESOURCE_METHOD_TYPE.CREATE, undefined, undefined, UserModel>): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>
  > {
    if (root) {
      let { result: linkedUser } = await this._linkedUserService.get({
        filter: { type: LINKED_USER_TYPE.STRIPE },
        options: { project: { _id: true } },
        root,
      });
      if (!linkedUser) {
        const id = await this._stripeAdminService.createCustomer();
        const { result: createdLinkedUser } = await this._linkedUserService.create({
          form: { id, type: LINKED_USER_TYPE.STRIPE },
          root,
        });
        if (createdLinkedUser) {
          linkedUser = createdLinkedUser;
        }
      }

      if (linkedUser) {
        const result = await this._stripeAdminService.createIntent(linkedUser.id);
        return { result };
      }
      throw new NotFoundError('linked user payment method');
    }
    throw new UnauthenticatedError();
  }
}
