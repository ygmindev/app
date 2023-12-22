import { selfAuthorizer } from '#lib-backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { PaymentMethod } from '#lib-backend/billing/resources/PaymentMethod/PaymentMethod';
import { type PaymentMethodResolverModel } from '#lib-backend/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.models';
import { PaymentMethodService } from '#lib-backend/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { User } from '#lib-backend/user/resources/User/User';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
@withResolver<PaymentMethodModel>({ Resource: () => PaymentMethod })
export class PaymentMethodResolver
  extends createEmbeddedResourceResolver<PaymentMethodModel, undefined, UserModel>({
    Resource: PaymentMethod,
    ResourceService: PaymentMethodService,
    RootResource: User,
    authorizer: { default: selfAuthorizer() },
    name: PAYMENT_METHOD_RESOURCE_NAME,
  })
  implements PaymentMethodResolverModel {
  // @withAuthorizer({ authorizer: selfAuthorizer() })
  // @withOutput({
  //   Resource: String,
  //   RootResource: User,
  //   method: RESOURCE_METHOD_TYPE.CREATE,
  //   name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
  // })
  // async createToken(
  //   @withInput({
  //     Resource: String,
  //     method: RESOURCE_METHOD_TYPE.CREATE,
  //     name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
  //   })
  //   input: InputModel<RESOURCE_METHOD_TYPE.CREATE, string> = {},
  //   @withContext()
  //   _context?: ContextModel,
  // ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
  //   return Container.get(PaymentMethodService).createToken(input);
  // }
}
