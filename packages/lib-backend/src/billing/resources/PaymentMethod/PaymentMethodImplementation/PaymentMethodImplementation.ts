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
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
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
      if (input.form?.products && linkedUser) {
        const { products } = input.form;
        const productsGrouped = groupBy(products, ({ productId }) => productId);
        const productsF =
          products &&
          (
            await this.productImplementation.getMany({
              filter: [
                {
                  condition: FILTER_CONDITION.IN,
                  field: '_id',
                  value: Object.keys(productsGrouped),
                },
              ],
              options: { project: { [PRICING_RESOURCE_NAME]: true } },
            })
          )?.result;
        const amount =
          productsF?.reduce((result, product) => {
            const pricings = productsGrouped[(product._id as unknown as ObjectId).toString()];
            const productPrice = pricings
              ?.filter((pricing) =>
                product[PRICING_RESOURCE_NAME]?.find((v) =>
                  new ObjectId(pricing.pricingId).equals(v._id),
                ),
              )
              .reduce((pricingResult, v) => pricingResult + v.price * (v.quantity ?? 1), 0);
            return result + (productPrice ?? 0);
          }, 0) ?? 0;

        const price = getPrice(input.form?.products);

        if (price !== amount) {
          throw new InvalidArgumentError(`prices do not match: ${price} vs. ${amount}`);
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
