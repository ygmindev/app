import { type BankFormModel, type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type BankImplementationModel = EmbeddedResourceImplementationModel<
  BankModel,
  BankFormModel,
  UserModel
>;
