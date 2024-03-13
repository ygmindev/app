import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';

export type AggregateParamsModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = InputModel<RESOURCE_METHOD_TYPE.GET | RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot> & {
  name: string;
};

export type AggregateModel = Array<object>;
