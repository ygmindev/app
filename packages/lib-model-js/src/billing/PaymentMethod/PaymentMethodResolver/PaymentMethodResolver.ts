import { PaymentInput } from '@lib/backend/billing/utils/PaymentInput/PaymentInput';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { IdInput } from '@lib/backend/resource/utils/IdInput/IdInput';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { PaymentMethod } from '@lib/model/billing/PaymentMethod/PaymentMethod';
import {
  CREATE_TOKEN,
  PAYMENT_METHOD_GET_ALL,
  REMOVE_TOKEN,
} from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { PaymentMethodImplementation } from '@lib/model/billing/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation';
import { PaymentMethodImplementationModel } from '@lib/model/billing/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation.models';
import { type PaymentMethodResolverModel } from '@lib/model/billing/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.models';
import { type PaymentInputModel } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { IdInputModel } from '@lib/shared/resource/utils/IdInput/IdInput.models';

@withContainer()
@withResolver()
export class PaymentMethodResolver implements PaymentMethodResolverModel {
  @withInject(PaymentMethodImplementation)
  protected paymentMethodImplementation!: PaymentMethodImplementationModel;

  @withOutput({
    access: ACCESS_LEVEL.PROTECTED,
    name: CREATE_TOKEN,
    type: DATA_TYPE.STRING,
  })
  async createToken(
    @withInput({ Resource: () => PaymentInput })
    input: PaymentInputModel,
    @withContext() context?: RequestContextModel,
  ): Promise<string> {
    return this.paymentMethodImplementation.createToken(input, context);
  }

  @withOutput({
    Resource: () => PaymentMethod,
    access: ACCESS_LEVEL.PROTECTED,
    isArray: true,
    name: PAYMENT_METHOD_GET_ALL,
  })
  async getAll(
    @withContext() context?: RequestContextModel,
  ): Promise<PartialArrayModel<PaymentMethodModel>> {
    return this.paymentMethodImplementation.getAll(context);
  }

  @withOutput({
    access: ACCESS_LEVEL.PROTECTED,
    name: REMOVE_TOKEN,
    type: DATA_TYPE.BOOLEAN,
  })
  async removeToken(
    @withInput({ Resource: () => IdInput })
    input: IdInputModel,
    @withContext() context?: RequestContextModel,
  ): Promise<boolean> {
    return this.paymentMethodImplementation.removeToken(input, context);
  }
}
