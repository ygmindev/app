import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { PaymentArgs } from '@lib/backend/billing/resources/PaymentArgs/PaymentArgs';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { PaymentMethodImplementation } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation';
import { type PaymentMethodResolverModel } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.models';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { User } from '@lib/backend/user/resources/User/User';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver<PaymentMethodModel>()
export class PaymentMethodResolver
  extends createEmbeddedResourceResolver<PaymentMethodModel, undefined, UserModel>({
    Resource: () => PaymentMethod,
    ResourceImplementation: PaymentMethodImplementation,
    RootResource: () => User,
    authorizer: { default: selfAuthorizer() },
    name: PAYMENT_METHOD_RESOURCE_NAME,
  })
  implements PaymentMethodResolverModel
{
  @withOutput({
    Resource: () => String,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
  })
  async createToken(
    @withInput({
      Resource: () => PaymentArgs,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, PaymentArgsModel, UserModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
    return Container.get(PaymentMethodImplementation).createToken(input);
  }
}
