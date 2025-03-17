import { type ClassModel } from '@lib/shared/core/core.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import {
  type ResourceImplementationDecoratorModel,
  type ResourceImplementationModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateResourceImplementationParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> &
  ResourceImplementationModel<TType, TForm, TRoot> &
  ResourceImplementationDecoratorModel<TType, TForm, TRoot> & {
    Resource: ClassModel<TType>;
    count(filter?: Array<FilterModel<TType>>): Promise<number>;
  };

export type CreateResourceImplementationModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ClassModel<
  ResourceImplementationModel<TType, TForm, TRoot> & {
    count(filter?: Array<FilterModel<TType>>): Promise<number>;
  }
>;
