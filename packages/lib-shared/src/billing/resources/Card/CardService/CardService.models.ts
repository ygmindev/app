import { type CardFormModel, type CardModel } from '#lib-shared/billing/resources/Card/Card.models';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/services/EmbeddedResourceService/EmbeddedResourceService.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type CardServiceModel = EmbeddedResourceServiceModel<CardModel, CardFormModel, UserModel>;
