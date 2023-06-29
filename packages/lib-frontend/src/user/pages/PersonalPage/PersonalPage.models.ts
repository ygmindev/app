import { type PagePropsModel, type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type PersonalPageItemModel = {
  value(user: EntityResourcePartialModel<UserModel>): string | undefined;
} & TranslatableOptionModel;

export type PersonalPagePropsModel = PagePropsModel;
