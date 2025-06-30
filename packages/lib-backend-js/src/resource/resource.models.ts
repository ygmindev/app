import { type AccessLevelModel } from '@lib/model/auth/Access/Access.models';
import { type ClassModel, type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export type ResourceClassModel<TType> =
  TType extends Array<infer TElement>
    ? Array<ClassModel<TElement>>
    : TType extends NilModel
      ? never
      : ClassModel<TType>;

export type ResourceAccessTypeModel = 'default' | 'read' | 'write' | ResourceMethodTypeModel;

export type ResourceAccessModel = PartialModel<Record<ResourceAccessTypeModel, AccessLevelModel>>;
