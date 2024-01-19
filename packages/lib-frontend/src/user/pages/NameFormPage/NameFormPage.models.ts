import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type NameFormModel = Pick<UserModel, 'first' | 'last'>;

export type NameFormPagePropsModel = PagePropsModel;
