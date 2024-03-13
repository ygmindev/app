import { BankImplementation } from '@lib/backend/billing/resources/Bank/BankImplementation/BankImplementation';
import { CardImplementation } from '@lib/backend/billing/resources/Card/CardImplementation/CardImplementation';
import { StripeAdminImplementation } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation';
import { ProductImplementation } from '@lib/backend/commerce/resources/Product/ProductImplementation/ProductImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { LinkedUserImplementation } from '@lib/backend/user/resources/LinkedUser/LinkedUserImplementation/LinkedUserImplementation';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentMethodImplementationModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation.models';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { getTotalPrice } from '@lib/shared/commerce/utils/getTotalPrice/getTotalPrice';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { LINKED_USER_TYPE } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import reduce from 'lodash/reduce';
import { ObjectId } from 'mongodb';

@withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Implementation` })
export class PaymentMethodImplementation implements PaymentMethodImplementationModel {
  @withInject(LinkedUserImplementation)
  protected linkedUserImplementation!: LinkedUserImplementation;

  @withInject(ProductImplementation)
  protected productImplementation!: ProductImplementation;

  @withInject(CardImplementation)
  protected cardImplementation!: CardImplementation;

  @withInject(BankImplementation)
  protected bankImplementation!: BankImplementation;

  @withInject(StripeAdminImplementation)
  protected stripeAdminImplementation!: StripeAdminImplementation;

  async getMany(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel> = {},
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>> {
    if (input.root) {
      const fields: Array<StringKeyModel<PaymentMethodModel>> = [
        '_id',
        'externalId',
        'last4',
        'name',
        'type',
      ];
      const project = reduce(fields, (result, v) => ({ ...result, [v]: true }), {});
      const { result: banks } = await this.bankImplementation.getMany({
        filter: [],
        options: { project },
        root: input.root,
      });
      const { result: cards } = await this.cardImplementation.getMany({
        filter: [],
        options: { project },
        root: input.root,
      });
      return {
        result: [
          ...(banks?.map((value) => pick(value, fields)) ?? []),
          ...(cards?.map((value) => pick(value, fields)) ?? []),
        ],
      };
    }
    throw new UnauthenticatedError();
  }

  async createToken(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, PaymentArgsModel, UserModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
    if (input?.root) {
      let { result: linkedUser } = await this.linkedUserImplementation.get({
        filter: [{ field: 'type', value: LINKED_USER_TYPE.STRIPE }],
        options: { project: { _id: true, externalId: true } },
        root: input.root,
      });
      if (linkedUser) {
        const products =
          input.form?.items &&
          (
            await this.productImplementation.getMany({
              filter: [
                {
                  condition: FILTER_CONDITION.IN,
                  field: '_id',
                  value: input.form.items.map(({ productId }) => productId),
                },
              ],
              options: { project: { [PRICING_RESOURCE_NAME]: true } },
            })
          )?.result;

        const amount =
          products?.reduce((result, product) => {
            const item = input.form?.items?.find(
              (v) => product._id && new ObjectId(v.productId).equals(product._id),
            );
            const pricingF =
              item &&
              product[PRICING_RESOURCE_NAME]?.find((pricing) =>
                new ObjectId(item.pricingId).equals(pricing._id),
              );
            return pricingF ? result + pricingF.price * (item.quantity ?? 1) : result;
          }, 0) ?? 0;
        const price = getTotalPrice(input.form?.items);

        if (price !== amount) {
          throw new InvalidArgumentError('Prices do not match');
        }

        const result =
          linkedUser.externalId &&
          (await this.stripeAdminImplementation.createToken({
            paymentMethodId: input.form?.paymentMethodId,
            price: { amount: amount * 100, currency: 'usd' },
            userId: linkedUser.externalId,
          }));

        return { result };
      } else {
        const id = await this.stripeAdminImplementation.createCustomer();
        const { result: linkedUserNew } = await this.linkedUserImplementation.create({
          form: { externalId: id, type: LINKED_USER_TYPE.STRIPE },
          root: input.root,
        });
        linkedUserNew && (linkedUser = linkedUserNew);
      }

      throw new NotFoundError('linked user');
    }
    throw new UnauthenticatedError();
  }
}
