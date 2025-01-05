import { BankImplementation } from '@lib/backend/billing/resources/Bank/BankImplementation/BankImplementation';
import { CardImplementation } from '@lib/backend/billing/resources/Card/CardImplementation/CardImplementation';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { StripeAdminImplementation } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation';
import { type StripeAdminImplementationModel } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation.models';
import { ProductImplementation } from '@lib/backend/commerce/resources/Product/ProductImplementation/ProductImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { LinkedUserImplementation } from '@lib/backend/user/resources/LinkedUser/LinkedUserImplementation/LinkedUserImplementation';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { type ChargeModel } from '@lib/shared/billing/billing.models';
import { type BankImplementationModel } from '@lib/shared/billing/resources/Bank/BankImplementation/BankImplementation.models';
import { type CardImplementationModel } from '@lib/shared/billing/resources/Card/CardImplementation/CardImplementation.models';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  PaymentMethodFormModel,
  type PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentMethodImplementationModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation.models';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type ProductImplementationModel } from '@lib/shared/commerce/resources/Product/ProductImplementation/ProductImplementation.models';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { IdArgsModel } from '@lib/shared/resource/utils/IdArgs/IdArgs.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { LINKED_USER_TYPE } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type LinkedUserImplementationModel } from '@lib/shared/user/resources/LinkedUser/LinkedUserImplementation/LinkedUserImplementation.models';
import { UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';
import reduce from 'lodash/reduce';
import { ObjectId } from 'mongodb';

@withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Implementation` })
export class PaymentMethodImplementation
  extends createEmbeddedResourceImplementation<
    PaymentMethodModel,
    PaymentMethodFormModel,
    UserModel,
    UserFormModel
  >({
    Resource: PaymentMethod,
    RootImplementation: UserImplementation,
    name: PAYMENT_METHOD_RESOURCE_NAME,
  })
  implements PaymentMethodImplementationModel
{
  @withInject(LinkedUserImplementation)
  protected linkedUserImplementation!: LinkedUserImplementationModel;

  @withInject(ProductImplementation)
  protected productImplementation!: ProductImplementationModel;

  @withInject(CardImplementation)
  protected cardImplementation!: CardImplementationModel;

  @withInject(BankImplementation)
  protected bankImplementation!: BankImplementationModel;

  @withInject(StripeAdminImplementation)
  protected stripeAdminImplementation!: StripeAdminImplementationModel;

  async getMany(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel> = {},
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>> {
    if (input.root) {
      const fields: Array<StringKeyModel<PaymentMethodModel>> = [
        '_id',
        'externalId',
        'last4',
        'name',
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
          ...(banks?.map((v) => ({ ...pick(v, fields), type: PAYMENT_METHOD_TYPE.BANK })) ?? []),
          ...(cards?.map((v) => ({ ...pick(v, fields), type: PAYMENT_METHOD_TYPE.CARD })) ?? []),
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
      if (!linkedUser) {
        const id = await this.stripeAdminImplementation.createCustomer();
        const { result: linkedUserNew } = await this.linkedUserImplementation.create({
          form: { externalId: id, type: LINKED_USER_TYPE.STRIPE },
          root: input.root,
        });
        linkedUserNew && (linkedUser = linkedUserNew);
      }

      if (linkedUser?.externalId) {
        let charge: ChargeModel | undefined;
        const products = input.form?.products;
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
              options: { project: { [PRICING_RESOURCE_NAME]: true } },
            })
          )?.result;
          const amount =
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
            }, 0) ?? 0;

          const price = getPrice(input.form?.products);
          if (price !== amount) {
            throw new InvalidArgumentError(`prices do not match: ${price} vs. ${amount}`);
          }
          charge = { amount, currency: 'usd' };
        }
        return {
          result: await this.stripeAdminImplementation.createToken({
            charge,
            paymentMethodId: input.form?.paymentMethodId,
            userId: linkedUser.externalId,
          }),
        };
      }
      throw new NotFoundError('linked user');
    }
    throw new UnauthenticatedError();
  }

  async removeToken(
    input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, boolean, IdArgsModel, UserModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, boolean, UserModel>> {
    if (input?.root) {
      // const { result: linkedUser } = await this.linkedUserImplementation.get({
      //   filter: [{ field: 'type', value: LINKED_USER_TYPE.STRIPE }],
      //   options: { project: { _id: true, externalId: true } },
      //   root: input.root,
      // });
      const id = input.filter?.[0]?.value as string;
      if (id) {
        console.warn(id);
        void this.stripeAdminImplementation.removeToken(id);
      } else {
        throw new NotFoundError('id');
      }
      return { result: true };
    }
    throw new UnauthenticatedError();
  }
}
