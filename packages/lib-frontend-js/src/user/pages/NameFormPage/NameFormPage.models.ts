import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type NameFormModel = Pick<UserModel, 'first' | 'last'>;

export type NameFormPagePropsModel = PagePropsModel;
