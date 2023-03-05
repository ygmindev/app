import { BankService } from '@lib/backend/billing/resources/Bank/BankService/BankService';
import { CardService } from '@lib/backend/billing/resources/Card/CardService/CardService';
import { StripeAdminService } from '@lib/backend/billing/utils/StripeAdminService/StripeAdminService';
import { LinkedUserService } from '@lib/backend/user/resources/LinkedUser/LinkedUserService/LinkedUserService';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type {
  PaymentMethodFormModel,
  PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { PaymentMethodServiceModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { withInject } from '@lib/shared/core/decorators/withInject/withInject';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { LINKED_USER_TYPE } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Service` })
export class PaymentMethodService implements PaymentMethodServiceModel {
  @withInject(LinkedUserService) protected _linkedUserService!: LinkedUserService;

  @withInject(CardService) protected _cardService!: CardService;

  @withInject(BankService) protected _bankService!: BankService;

  @withInject(StripeAdminService) protected _stripeAdminService!: StripeAdminService;

  async getMany({
    root,
  }: InputModel<
    RESOURCE_METHOD_TYPE.GET_MANY,
    PaymentMethodModel,
    PaymentMethodFormModel,
    UserModel
  >): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>> {
    if (root) {
      const { result: banks } = await this._bankService.getMany({
        filter: {},
        options: { project: { _id: true, id: true, last4: true } },
        root: { _id: root._id },
      });
      const { result: cards } = await this._cardService.getMany({
        filter: {},
        options: { project: { _id: true, id: true, last4: true } },
        root: { _id: root._id },
      });
      return {
        result: [
          ...(banks ? banks.map((value) => ({ ...value, type: PAYMENT_METHOD_TYPE.BANK })) : []),
          ...(cards ? cards.map((value) => ({ ...value, type: PAYMENT_METHOD_TYPE.CARD })) : []),
        ],
      };
    }
    throw new UnauthenticatedError();
  }

  async createToken({
    root,
  }: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, undefined, UserModel>): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>
  > {
    if (root) {
      const _uid = root._id;
      let { result: linkedUser } = await this._linkedUserService.get({
        filter: { type: LINKED_USER_TYPE.STRIPE },
        options: { project: { _id: true } },
        root: { _id: _uid },
      });
      if (!linkedUser) {
        const id = await this._stripeAdminService.createCustomer();
        const { result: createdLinkedUser } = await this._linkedUserService.create({
          form: { id, type: LINKED_USER_TYPE.STRIPE },
          root: { _id: _uid },
        });
        if (createdLinkedUser) {
          linkedUser = createdLinkedUser;
        }
      }

      if (linkedUser) {
        const result = await this._stripeAdminService.createIntent(linkedUser.id);
        return { result };
      }
      throw new NotFoundError('linked user payment method');
    }
    throw new UnauthenticatedError();
  }
}
