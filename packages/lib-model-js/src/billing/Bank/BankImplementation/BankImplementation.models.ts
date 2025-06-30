import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type BankImplementationModel = EmbeddedResourceImplementationModel<BankModel, UserModel>;
