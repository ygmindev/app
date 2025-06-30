import { type DataRendererModel } from '@lib/frontend/data/data.models';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type ReactElement } from 'react';

export type EmbeddedResourceRendererParamsModel<
  TType extends EntityResourceModel,
  TRoot = undefined,
> = {
  description?(value?: PartialModel<TType>): string | undefined;
  element: ReactElement<ResourceTablePropsModel<TType, TRoot>>;
};

export type EmbeddedResourceRendererModel<
  TType extends EntityResourceModel,
  TRoot = undefined,
> = DataRendererModel<TType>;
