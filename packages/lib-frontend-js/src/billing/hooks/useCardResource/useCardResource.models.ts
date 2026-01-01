import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseCardResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UseCardResourceModel = UseResourceModel<CardModel>;
