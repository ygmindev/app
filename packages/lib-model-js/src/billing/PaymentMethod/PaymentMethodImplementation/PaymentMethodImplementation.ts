import { StripeAdminImplementation } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation';
import { type StripeAdminImplementationModel } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { RequestContextModel } from '@lib/config/api/api.models';
import { BankImplementation } from '@lib/model/billing/Bank/BankImplementation/BankImplementation';
import { type BankImplementationModel } from '@lib/model/billing/Bank/BankImplementation/BankImplementation.models.js';
import { CardImplementation } from '@lib/model/billing/Card/CardImplementation/CardImplementation';
import { type CardImplementationModel } from '@lib/model/billing/Card/CardImplementation/CardImplementation.models';
import {
  PAYMENT_METHOD_TYPE,
  type PaymentMethodModel,
} from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type PaymentMethodImplementationModel } from '@lib/model/billing/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation.models';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { ProductImplementation } from '@lib/model/commerce/Product/ProductImplementation/ProductImplementation';
import { type ProductImplementationModel } from '@lib/model/commerce/Product/ProductImplementation/ProductImplementation.models';
import { FILTER_CONDITION } from '@lib/model/resource/Filter/Filter.constants';
import { IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { LINKED_USER_TYPE } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { LinkedUserImplementation } from '@lib/model/user/LinkedUser/LinkedUserImplementation/LinkedUserImplementation';
import { type LinkedUserImplementationModel } from '@lib/model/user/LinkedUser/LinkedUserImplementation/LinkedUserImplementation.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { type ChargeModel } from '@lib/shared/billing/billing.models';
import { type PaymentInputModel } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.models';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { PartialArrayModel, type StringKeyModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import round from 'lodash/round';

@withContainer()
export class PaymentMethodImplementation implements PaymentMethodImplementationModel {
  @withInject(BankImplementation)
  protected bankImplementation!: BankImplementationModel;

  @withInject(CardImplementation)
  protected cardImplementation!: CardImplementationModel;

  @withInject(LinkedUserImplementation)
  protected linkedUserImplementation!: LinkedUserImplementationModel;

  @withInject(ProductImplementation)
  protected productImplementation!: ProductImplementationModel;

  @withInject(StripeAdminImplementation)
  protected stripeAdminImplementation!: StripeAdminImplementationModel;

  async createToken(input: PaymentInputModel, context?: RequestContextModel): Promise<string> {
    const userId = context?.user?._id;
    if (userId) {
      let { result: linkedUser } = await this.linkedUserImplementation.get({
        filter: [{ field: 'type', value: LINKED_USER_TYPE.STRIPE }],
        root: userId,
      });
      if (!linkedUser) {
        const id = await this.stripeAdminImplementation.createCustomer();
        const { result: linkedUserNew } = await this.linkedUserImplementation.create({
          form: { externalId: id, type: LINKED_USER_TYPE.STRIPE },
          root: userId,
        });
        linkedUserNew && (linkedUser = linkedUserNew);
      }

      if (linkedUser?.externalId) {
        let charge: ChargeModel | undefined;
        const products = input?.products;
        if (products) {
          const productsGrouped = groupBy(products, ({ productId }) => productId ?? '');
          const productsF = (
            await this.productImplementation.getMany({
              filter: [
                {
                  condition: FILTER_CONDITION.IN,
                  field: '_id',
                  value: Object.keys(productsGrouped),
                },
              ],
            })
          )?.result;

          const amount = round(
            productsF?.reduce((result, product) => {
              const pricings = productsGrouped?.[(product._id as unknown as ObjectId).toString()];
              const productPrice = pricings
                ?.filter((pricing) =>
                  product[PRICING_RESOURCE_NAME]?.find((v) =>
                    new ObjectId(pricing.pricingId).equals(v._id),
                  ),
                )
                .reduce(
                  (pricingResult, v) => pricingResult + (v.price ?? 0) * (v.quantity ?? 1),
                  0,
                );
              return result + (productPrice ?? 0);
            }, 0) ?? 0,
            2,
          );

          const price = getPrice(input?.products);
          if (price !== amount) {
            throw new InvalidArgumentError(`prices do not match: ${price} vs. ${amount}`);
          }
          charge = { amount, currency: 'usd' };
        }
        const token = await this.stripeAdminImplementation.createToken({
          charge,
          paymentMethodId: input?.paymentMethodId,
          userId: linkedUser.externalId,
        });
        if (token) {
          return token;
        }
        throw new Error('failed to create token');
      }
      throw new NotFoundError('linked user');
    }
    throw new UnauthenticatedError();
  }

  async getAll(context?: RequestContextModel): Promise<PartialArrayModel<PaymentMethodModel>> {
    const userId = context?.user?._id;
    if (userId) {
      const fields: Array<StringKeyModel<PaymentMethodModel>> = [
        '_id',
        'brand',
        'externalId',
        'last4',
        'name',
      ];
      const { result: banks } = await this.bankImplementation.getMany({ root: userId });
      const { result: cards } = await this.cardImplementation.getMany({ root: userId });
      return [
        ...(banks?.map((v) => ({ ...pick(v, fields), type: PAYMENT_METHOD_TYPE.BANK })) ?? []),
        ...(cards?.map((v) => ({ ...pick(v, fields), type: PAYMENT_METHOD_TYPE.CARD })) ?? []),
      ];
    }
    throw new UnauthenticatedError();
  }

  async removeToken(input: IdInputModel, context?: RequestContextModel): Promise<boolean> {
    const userId = context?.user?._id;
    if (userId) {
      const { id } = input;
      if (id) {
        void this.stripeAdminImplementation.removeToken(id);
      } else {
        throw new NotFoundError('id');
      }
      return true;
    }
    throw new UnauthenticatedError();
  }
}
