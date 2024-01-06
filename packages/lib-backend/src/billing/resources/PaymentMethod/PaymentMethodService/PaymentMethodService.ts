import reduce from 'lodash/reduce';

import { BankService } from '#lib-backend/billing/resources/Bank/BankService/BankService';
import { CardService } from '#lib-backend/billing/resources/Card/CardService/CardService';
import { StripeAdminService } from '#lib-backend/billing/utils/StripeAdminService/StripeAdminService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { LinkedUserService } from '#lib-backend/user/resources/LinkedUser/LinkedUserService/LinkedUserService';
import { UnauthenticatedError } from '#lib-shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentMethodServiceModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { NotFoundError } from '#lib-shared/core/errors/NotFoundError/NotFoundError';
import { pick } from '#lib-shared/core/utils/pick/pick';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { LINKED_USER_TYPE } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Service` })
export class PaymentMethodService implements PaymentMethodServiceModel {
  @withInject(LinkedUserService) protected linkedUserService!: LinkedUserService;

  @withInject(CardService) protected cardService!: CardService;

  @withInject(BankService) protected bankService!: BankService;

  @withInject(StripeAdminService) protected stripeAdminService!: StripeAdminService;

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
      const { result: banks } = await this.bankService.getMany({
        filter: [],
        options: { project },
        root: input.root,
      });
      const { result: cards } = await this.cardService.getMany({
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
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, undefined, UserModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>> {
    if (input?.root) {
      let { result: linkedUser } = await this.linkedUserService.get({
        filter: [{ field: 'type', value: LINKED_USER_TYPE.STRIPE }],
        options: { project: { _id: true, externalId: true } },
        root: input.root,
      });
      if (!linkedUser) {
        const id = await this.stripeAdminService.createCustomer();
        const { result: linkedUserNew } = await this.linkedUserService.create({
          form: { id, type: LINKED_USER_TYPE.STRIPE },
          root: input.root,
        });
        linkedUserNew && (linkedUser = linkedUserNew);
      }
      if (linkedUser) {
        const result =
          linkedUser.externalId &&
          (await this.stripeAdminService.createIntent(linkedUser.externalId));
        return { result };
      }
      throw new NotFoundError('linked user');
    }
    throw new UnauthenticatedError();
  }
}
