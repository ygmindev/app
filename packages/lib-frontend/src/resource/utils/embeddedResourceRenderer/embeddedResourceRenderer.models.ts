import { type DataRendererModel } from '@lib/frontend/data/data.models';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ReactElement } from 'react';

export type EmbeddedResourceRendererParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  element: ReactElement<ResourceTablePropsModel<TType, TForm, TRoot>>;
};

export type EmbeddedResourceRendererModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = DataRendererModel<TType>;
