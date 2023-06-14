import type { PagePropsModel, TranslatableOptionModel } from '#lib-frontend/core/core.models';
import type { EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '#lib-shared/user/resources/User/User.models';

export interface PersonalPageItemModel extends TranslatableOptionModel {
  value(user: EntityResourcePartialModel<UserModel>): string | undefined;
}

export interface PersonalPagePropsModel extends PagePropsModel {}
