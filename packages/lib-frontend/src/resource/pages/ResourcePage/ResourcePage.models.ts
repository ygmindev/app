import { type PagePropsModel, type SFCModel } from '@lib/frontend/core/core.models';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ReactElement } from 'react';

export type ResourcePagePropsModel = PagePropsModel;

export type ResourcePageParamsModel = {
  resourceid?: string;
};

export type ResourcePageItemModel<
  TType extends EntityResourceModel,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  element: ReactElement<SFCModel<ResourceTablePropsModel<TType, TForm, TRoot>>>;
};
