import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { PaymentMethodService } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService';
import { withContext } from '@lib/backend/http/decorators/withContext/withContext';
import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import { authorize } from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { PaymentMethodServiceModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ContextModel } from '@lib/shared/resource/utils/Context/Context.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: PaymentMethod })
export class PaymentMethodResolver
  extends EmbeddedResourceResolver<PaymentMethodModel, undefined, UserModel>({
    Resource: PaymentMethod,
    ResourceService: PaymentMethodService,
    RootResource: User,
    authorizer: { default: selfAuthorizer },
    name: PAYMENT_METHOD_RESOURCE_NAME,
  })
  implements PaymentMethodServiceModel
{
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
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
    authorize({ authorizer: selfAuthorizer, context, input });
    return Container.get(PaymentMethodService).createToken(input);
  }
}

// import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
// import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
// import { PaymentMethodService } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService';
// import { withContext } from '@lib/backend/http/decorators/withContext/withContext';
// import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
// import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
// import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
// import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
// import { authorize } from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver';
// import { User } from '@lib/backend/user/resources/User/User';
// import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
// import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
// import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
// import type { PaymentMethodServiceModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';
// import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
// import { Container } from '@lib/shared/core/utils/Container/Container';
// import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
// import type { ContextModel } from '@lib/shared/resource/utils/Context/Context.models';
// import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
// import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
// import type { UserModel } from '@lib/shared/user/resources/User/User.models';

// @withContainer()
// @withResolver({ Resource: PaymentMethod })
// export class PaymentMethodResolver
//   extends EmbeddedResourceResolver<PaymentMethodModel, undefined, UserModel>({
//     Resource: PaymentMethod,
//     ResourceService: PaymentMethodService,
//     RootResource: User,
//     authorizer: { default: selfAuthorizer },
//     name: PAYMENT_METHOD_RESOURCE_NAME,
//   })
//   implements PaymentMethodServiceModel
// {
//   @withOutput({
//     Resource: String,
//     RootResource: User,
//     level: ACCESS_LEVEL.PROTECTED,
//     method: RESOURCE_METHOD_TYPE.CREATE,
//     name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
//   })
//   async createToken(
//     @withInput({
//       RootResource: User,
//       method: RESOURCE_METHOD_TYPE.CREATE,
//       name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
//     })
//     input: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, undefined, UserModel>,
//     @withContext()
//     context?: ContextModel,
//   ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
//     authorize({ authorizer: selfAuthorizer, context, input });
//     return Container.get(PaymentMethodService).createToken(input);
//   }
// }