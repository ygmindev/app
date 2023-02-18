import type { PagePropsModel } from '@lib/frontend/core/core.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface NameFormModel extends Pick<UserModel, 'first' | 'last'> {}

export interface NameFormPagePropsModel extends PagePropsModel {}
