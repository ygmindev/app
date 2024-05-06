import { type CardFormModel, type CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type CardImplementationModel = EmbeddedResourceImplementationModel<
  CardModel,
  CardFormModel,
  UserModel
>;
