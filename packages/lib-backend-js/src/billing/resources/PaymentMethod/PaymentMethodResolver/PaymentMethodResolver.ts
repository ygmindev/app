import { PaymentInput } from '@lib/backend/billing/resources/PaymentInput/PaymentInput';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { PaymentMethodImplementation } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation';
import { type PaymentMethodResolverModel } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { IdInput } from '@lib/backend/resource/utils/IdInput/IdInput';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  CREATE_TOKEN,
  PAYMENT_METHOD_GET_ALL,
  REMOVE_TOKEN,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { PaymentMethodImplementationModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation.models';
import { type PaymentInputModel } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.models';
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
  ): Promise<Array<Partial<PaymentMethodModel>>> {
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
