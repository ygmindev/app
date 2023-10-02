import { type ResourceResolverAuthorizerParamsModel } from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type SelfAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel = ResourceMethodTypeModel,
  TType = unknown,
  TForm = EntityResourceDataModel<TType>,
  TRoot = UserModel,
> = (input: InputModel<TMethod, TType, TForm, TRoot>) => string | undefined;

export type SelfAuthorizerModel<
  TMethod extends ResourceMethodTypeModel = ResourceMethodTypeModel,
  TType = unknown,
  TForm = EntityResourceDataModel<TType>,
  TRoot = UserModel,
> = (params: ResourceResolverAuthorizerParamsModel<TMethod, TType, TForm, TRoot>) => boolean;
