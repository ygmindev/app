import { type UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type CardServiceModel } from '#lib-shared/billing/resources/Card/CardService/CardService.models';

export type UseCardResourceParamsModel = UseResourceMethodHookParamsModel;

export type UseCardResourceModel = Pick<CardServiceModel, 'create' | 'get' | 'update' | 'remove'>;
