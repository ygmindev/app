import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceQueryHookParamsModel } from '@lib/frontend/resource/hooks/useResourceQuery/useResourceQuery.models';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseCardResourceParamsModel = UseResourceQueryHookParamsModel<UserModel>;

export type UseCardResourceModel = UseResourceModel<CardModel>;
