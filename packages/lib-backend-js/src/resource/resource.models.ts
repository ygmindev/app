import { type ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { type ClassModel, type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type ResourceClassModel<TType> =
  TType extends Array<infer TElement>
    ? Array<ClassModel<TElement>>
    : TType extends NilModel
      ? never
      : ClassModel<TType>;

export type ResourceAccessTypeModel = 'default' | 'read' | 'write' | RESOURCE_METHOD_TYPE;

export type ResourceAccessModel = PartialModel<Record<ResourceAccessTypeModel, ACCESS_LEVEL>>;
