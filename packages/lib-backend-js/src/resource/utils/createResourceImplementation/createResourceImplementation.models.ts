import { type ClassModel } from '@lib/shared/core/core.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import {
  type ResourceImplementationDecoratorModel,
  type ResourceImplementationModel,
} from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type CreateResourceImplementationParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceNameParamsModel<TRoot> &
  ResourceImplementationModel<TType, TForm, TRoot> &
  ResourceImplementationDecoratorModel<TType, TForm, TRoot> & {
    Resource: ClassModel<TType>;
    count(input: RootInputModel<TRoot>): Promise<number>;
  };

export type CreateResourceImplementationModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ClassModel<
  ResourceImplementationModel<TType, TForm, TRoot> & {
    count(): Promise<number>;
  }
>;
