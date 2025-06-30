import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type CardImplementationModel = EmbeddedResourceImplementationModel<CardModel, UserModel>;
