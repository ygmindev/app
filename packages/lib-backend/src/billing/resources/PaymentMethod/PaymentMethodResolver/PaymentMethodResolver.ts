import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { PaymentMethodService } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService';
import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type {
  PaymentMethodFormModel,
  PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { PaymentMethodServiceModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: PaymentMethod })
export class PaymentMethodResolver
  extends EmbeddedResourceResolver<PaymentMethodModel, PaymentMethodFormModel, UserModel>({
    Resource: PaymentMethod,
    ResourceService: PaymentMethodService,
    RootResource: User,
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
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
    return Container.get(PaymentMethodService).createToken(input);
  }
}
