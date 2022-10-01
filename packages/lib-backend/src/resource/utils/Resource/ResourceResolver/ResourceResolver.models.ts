import type { AccessLevelModel } from '@lib/shared/auth/resources/Access/Access.models';
import type { ConstructorModel, PartialModel } from '@lib/shared/core/core.models';
import type {
  ResourceServiceModel,
  ResourceServiceParamsModel,
} from '@lib/shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type ResourceResolverParamsModel<
  TType,
  TForm,
  TRoot = undefined,
> = ResourceServiceParamsModel<TType, TForm, TRoot> & {
  Resource: ConstructorModel<TType>;
  ResourceData?: ConstructorModel<TForm>;
  ResourceService: ConstructorModel<PartialModel<ResourceServiceModel<TType, TForm, TRoot>>>;
  Root?: TRoot extends undefined ? never : ConstructorModel<TRoot>;
  createAccess?: AccessLevelModel;
  getAccess?: AccessLevelModel;
  removeAccess?: AccessLevelModel;
  updateAccess?: AccessLevelModel;
};

export interface ResourceResolverModel<TType, TForm, TRoot = undefined>
  extends ResourceServiceModel<TType, TForm, TRoot> {}
