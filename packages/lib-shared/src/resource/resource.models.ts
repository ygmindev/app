import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type EntityResourceModel,
  type EntityResourcePartialModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type ResourceMethodTypeModel = `${RESOURCE_METHOD_TYPE}`;

export type ResourceReadMethodTypeModel =
  | RESOURCE_METHOD_TYPE.GET
  | RESOURCE_METHOD_TYPE.GET_MANY
  | RESOURCE_METHOD_TYPE.GET_CONNECTION;

export type ResourceWriteMethodTypeModel =
  | RESOURCE_METHOD_TYPE.CREATE
  | RESOURCE_METHOD_TYPE.CREATE_MANY
  | RESOURCE_METHOD_TYPE.REMOVE
  | RESOURCE_METHOD_TYPE.UPDATE;

export type ResourceMethodTypeCrudModel =
  | RESOURCE_METHOD_TYPE.CREATE
  | RESOURCE_METHOD_TYPE.GET
  | RESOURCE_METHOD_TYPE.GET_MANY
  | RESOURCE_METHOD_TYPE.REMOVE
  | RESOURCE_METHOD_TYPE.UPDATE;

export type ResourceNameParamsModel<TRoot = undefined> = {
  name: TRoot extends undefined ? string : keyof TRoot & string;
};

export type EmbeddableRootFieldModel<TRoot extends EntityResourceModel> =
  EntityResourcePartialModel<TRoot>;
