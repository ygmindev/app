import { selfAuthorizer } from '#lib-backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { PaymentMethod } from '#lib-backend/billing/resources/PaymentMethod/PaymentMethod';
import { type PaymentMethodResolverModel } from '#lib-backend/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.models';
import { PaymentMethodService } from '#lib-backend/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withContext } from '#lib-backend/http/utils/withContext/withContext';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { withAuthorizer } from '#lib-backend/resource/utils/withAuthorizer/withAuthorizer';
import { withInput } from '#lib-backend/resource/utils/withInput/withInput';
import { withOutput } from '#lib-backend/resource/utils/withOutput/withOutput';
import { User } from '#lib-backend/user/resources/User/User';
import { ACCESS_LEVEL } from '#lib-shared/auth/resources/Access/Access.constants';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: PaymentMethod })
export class PaymentMethodResolver
  extends createEmbeddedResourceResolver<PaymentMethodModel, undefined, UserModel>({
    Resource: PaymentMethod,
    ResourceService: PaymentMethodService,
    RootResource: User,
    authorizer: { default: selfAuthorizer },
    name: PAYMENT_METHOD_RESOURCE_NAME,
  })
  implements PaymentMethodResolverModel
{
  @withAuthorizer({ authorizer: selfAuthorizer })
  @withOutput({
    Resource: String,
    RootResource: User,
    level: ACCESS_LEVEL.PROTECTED,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
  })
  async createToken(
    @withInput({
      RootResource: User,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, undefined, UserModel>,
    @withContext()
    _context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
    return Container.get(PaymentMethodService).createToken(input);
  }
}
