import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type CardServiceModel } from '@lib/shared/billing/resources/Card/CardService/CardService.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UseCardResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UseCardResourceModel = Pick<CardServiceModel, 'create' | 'get' | 'update' | 'remove'>;
