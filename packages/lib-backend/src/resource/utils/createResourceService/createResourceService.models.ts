import { type ClassModel } from '#lib-shared/core/core.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import {
  type ResourceServiceDecoratorModel,
  type ResourceServiceModel,
} from '#lib-shared/resource/utils/ResourceService/ResourceService.models';
import { type RootInputModel } from '#lib-shared/resource/utils/Root/Root.models';

export type CreateResourceServiceParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> &
  ResourceServiceModel<TType, TForm, TRoot> &
  ResourceServiceDecoratorModel<TType, TForm, TRoot> & {
    Resource: ClassModel<TType>;
    count(input: RootInputModel<TRoot>): Promise<number>;
  };

export type CreateResourceServiceModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ClassModel<
  ResourceServiceModel<TType, TForm, TRoot> & {
    count(): Promise<number>;
  }
>;
